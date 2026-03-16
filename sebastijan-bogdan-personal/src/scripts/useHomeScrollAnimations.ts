import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export type HomeBreakpoint = "mobile" | "tablet" | "desktop";

export interface HomeAnimationOptions {
  root: HTMLElement;
  reducedMotion: boolean;
  breakpoint: HomeBreakpoint;
}

export interface HomeAnimationHandle {
  destroy: () => void;
}

const REVEAL_SELECTOR = "[data-reveal]";
const LINE_GROW_SELECTOR = "[data-line-grow]";
const LINE_DRAW_SELECTOR = "[data-line-draw]";

function primeSvgLine(line: SVGElement): number {
  const target = line as SVGGeometryElement;
  if (typeof target.getTotalLength !== "function") {
    return 0;
  }

  const length = target.getTotalLength();
  line.style.strokeDasharray = `${length}`;
  line.style.strokeDashoffset = `${length}`;
  return length;
}

function applyReducedMotionState(root: HTMLElement): void {
  const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  const growLines = Array.from(root.querySelectorAll<HTMLElement>(LINE_GROW_SELECTOR));
  const drawLines = Array.from(root.querySelectorAll<SVGElement>(LINE_DRAW_SELECTOR));

  gsap.set(revealNodes, { autoAlpha: 1, y: 0, x: 0 });
  gsap.set(growLines, { scaleX: 1, scaleY: 1 });
  drawLines.forEach((line) => {
    line.style.strokeDasharray = "none";
    line.style.strokeDashoffset = "0";
  });
}

function initLenisIfNeeded(reducedMotion: boolean, breakpoint: HomeBreakpoint): {
  lenis: Lenis | null;
  cleanup: () => void;
} {
  if (reducedMotion || breakpoint === "mobile") {
    return { lenis: null, cleanup: () => undefined };
  }

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.9,
    touchMultiplier: 1
  });

  const raf = (time: number) => {
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);

  const onRefresh = () => lenis.resize();
  ScrollTrigger.addEventListener("refresh", onRefresh);

  return {
    lenis,
    cleanup: () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
    }
  };
}

export function initHomeScrollAnimations(options: HomeAnimationOptions): HomeAnimationHandle {
  const { root, reducedMotion, breakpoint } = options;

  gsap.registerPlugin(ScrollTrigger);

  const { cleanup: cleanupLenis } = initLenisIfNeeded(reducedMotion, breakpoint);

  const context = gsap.context(() => {
    if (reducedMotion) {
      applyReducedMotionState(root);
      return;
    }

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const growLines = Array.from(root.querySelectorAll<HTMLElement>(LINE_GROW_SELECTOR));
    const drawLines = Array.from(root.querySelectorAll<SVGElement>(LINE_DRAW_SELECTOR));

    gsap.set(revealNodes, { autoAlpha: 0, y: 20 });
    growLines.forEach((line) => {
      const direction = line.dataset.lineGrow;
      gsap.set(line, {
        scaleX: direction === "x" ? 0 : 1,
        scaleY: direction === "y" ? 0 : 1,
        transformOrigin: direction === "y" ? "top center" : "left center"
      });
    });
    drawLines.forEach((line) => {
      primeSvgLine(line);
    });

    const acts = Array.from(root.querySelectorAll<HTMLElement>("[data-act]"));

    acts.forEach((act) => {
      const actRevealNodes = Array.from(act.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      const actLineGrow = Array.from(act.querySelectorAll<HTMLElement>(LINE_GROW_SELECTOR));
      const actLineDraw = Array.from(act.querySelectorAll<SVGElement>(LINE_DRAW_SELECTOR));
      const actNodes = Array.from(act.querySelectorAll<HTMLElement>("[data-node]"));
      const actAssemble = Array.from(act.querySelectorAll<HTMLElement>("[data-assemble]"));

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: act,
          start: "top 76%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      if (actLineGrow.length) {
        tl.to(
          actLineGrow,
          {
            scaleX: 1,
            scaleY: 1,
            duration: 0.75,
            stagger: 0.08
          },
          0
        );
      }

      if (actLineDraw.length) {
        tl.to(
          actLineDraw,
          {
            strokeDashoffset: 0,
            duration: 1.1,
            stagger: {
              each: 0.03,
              from: "start"
            }
          },
          0
        );
      }

      if (actAssemble.length) {
        tl.fromTo(
          actAssemble,
          { y: 22, autoAlpha: 0.25 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.1
          },
          0.14
        );
      }

      if (actRevealNodes.length) {
        tl.to(
          actRevealNodes,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.06
          },
          0.2
        );
      }

      actNodes.forEach((node) => {
        ScrollTrigger.create({
          trigger: node,
          start: "top 74%",
          end: "bottom 34%",
          onEnter: () => node.classList.add("is-active"),
          onLeaveBack: () => node.classList.remove("is-active")
        });
      });
    });

    if (breakpoint === "desktop") {
      const projectStage = root.querySelector<HTMLElement>("[data-project-stage]");
      if (projectStage) {
        ScrollTrigger.create({
          trigger: projectStage,
          start: "top top+=94",
          end: "bottom bottom-=140",
          pin: true,
          pinSpacing: true,
          scrub: 0.2
        });
      }
    }

    const projectStations = Array.from(root.querySelectorAll<HTMLElement>(".project-station"));
    projectStations.forEach((station, index) => {
      gsap.fromTo(
        station,
        { xPercent: index % 2 === 0 ? -6 : 6 },
        {
          xPercent: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: station,
            start: "top 82%",
            end: "top 38%",
            scrub: 0.7
          }
        }
      );
    });

    const parallaxNodes = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    parallaxNodes.forEach((node) => {
      const amount = Number(node.dataset.parallax ?? "0");
      if (!amount) return;

      gsap.to(node, {
        yPercent: amount * -40,
        ease: "none",
        scrollTrigger: {
          trigger: node.closest("[data-act]") ?? node,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, root);

  ScrollTrigger.refresh();

  return {
    destroy: () => {
      context.revert();
      cleanupLenis();
    }
  };
}
