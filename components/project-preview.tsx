import type { ReactNode } from "react";
import type { Project } from "@/data/projects";

interface ProjectPreviewProps {
  project: Project;
  featured?: boolean;
}

function WindowChrome({ project, children }: { project: Project; children: ReactNode }) {
  return (
    <div className="project-preview__frame">
      <div className="project-preview__chrome">
        <span className="project-preview__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="project-preview__address">{project.title.toLowerCase().replaceAll(" ", ".")}</span>
        <span className="project-preview__live" />
      </div>
      {children}
    </div>
  );
}

function PulsePreview() {
  return (
    <div className="preview-dashboard preview-dashboard--pulse">
      <aside className="preview-sidebar"><b>s</b><span /><span /><span /><span /></aside>
      <div className="preview-workspace">
        <div className="preview-toolbar"><span>Model health</span><small>Last 24 hours</small></div>
        <div className="preview-stat-grid">
          <div><small>Inferences</small><strong>18.4k</strong><em>+18.2%</em></div>
          <div><small>P95 latency</small><strong>82ms</strong><em>−12.8%</em></div>
          <div><small>Drift score</small><strong>0.08</strong><em>Stable</em></div>
        </div>
        <div className="preview-chart"><div className="preview-chart__grid" /><svg viewBox="0 0 480 130" preserveAspectRatio="none"><path d="M0 112 C36 92 52 102 82 77 S122 89 151 68 S195 91 229 58 S279 85 307 47 S361 62 386 32 S435 58 480 12" /></svg><span className="preview-chart__point" /></div>
      </div>
    </div>
  );
}

function NovaPreview() {
  return (
    <div className="preview-nova">
      <aside className="preview-nova__sidebar"><b>copilot</b><span>New conversation</span><i /><i /><i /></aside>
      <div className="preview-nova__chat">
        <div className="preview-nova__heading"><span>Knowledge assistant</span><small>● Grounded</small></div>
        <div className="preview-nova__messages"><p>What changed in the latest release?</p><p>I found three relevant sources. Here&apos;s the summary with supporting evidence.</p><p>What should I review first?</p><p>The strongest signal is the change in API error rates after deployment.</p></div>
        <div className="preview-nova__input"><span>Ask your knowledge base</span><b>↑</b></div>
      </div>
    </div>
  );
}

function MarketplacePreview() {
  return (
    <div className="preview-marketplace">
      <div className="preview-marketplace__nav"><b>marketflow</b><span>Explore</span><span>Insights</span><i /></div>
      <div className="preview-marketplace__intro"><span>Recommended for you</span><strong>Discover what fits.</strong><span className="preview-marketplace__button">Explore</span></div>
      <div className="preview-marketplace__products"><i /><i /><i /></div>
    </div>
  );
}

function FitFlowPreview() {
  return (
    <div className="preview-fitflow">
      <div className="preview-fitflow__rings"><i /><i /><i /></div>
      <div className="preview-fitflow__phone"><div className="preview-fitflow__notch" /><small>THURSDAY, 9:41</small><strong>Train with feedback.</strong><div className="preview-fitflow__graph"><i /><i /><i /><i /><i /><i /><i /></div><div className="preview-fitflow__footer"><span>32 min</span><b>Start session</b></div></div>
      <p>Movement feedback,<br />made practical.</p>
    </div>
  );
}

function CmsPreview() {
  return (
    <div className="preview-cms">
      <div className="preview-cms__nav"><b>m</b><span>Models</span><span>Runs</span><span>Releases</span></div>
      <div className="preview-cms__canvas"><div className="preview-cms__page"><small>MODEL CARD / V2.4</small><strong>Churn classifier.</strong><p>Evaluation, release history, and live health in one view.</p><i /></div><aside><span>Release checks</span><div /><div /><div /></aside></div>
    </div>
  );
}

function SpectraPreview() {
  return (
    <div className="preview-spectra">
      <div className="preview-spectra__nav"><b>platform</b><span>Services</span><span>APIs</span><span>Docs</span></div>
      <div className="preview-spectra__body"><aside><small>FOUNDATIONS</small><span>Auth</span><span>Events</span><span>Storage</span><small>SERVICES</small><span className="is-selected">Gateway</span><span>Identity</span></aside><div className="preview-spectra__main"><small>SERVICE / API GATEWAY</small><strong>Gateway</strong><div className="preview-spectra__buttons"><b>Get started</b><b>Endpoint</b><b>Schema</b></div><div className="preview-spectra__tokens"><i /><i /><i /><i /><i /></div></div></div>
    </div>
  );
}

function ProjectInterface({ project }: { project: Project }) {
  switch (project.id) {
    case "signalwatch-platform": return <PulsePreview />;
    case "knowledge-copilot": return <NovaPreview />;
    case "commerce-intelligence": return <MarketplacePreview />;
    case "motion-coach": return <FitFlowPreview />;
    case "modelops-studio": return <CmsPreview />;
    case "developer-platform": return <SpectraPreview />;
    default: return null;
  }
}

/** A lightweight, CSS-rendered product scene used when there is no screen capture available. */
export function ProjectPreview({ project, featured = false }: ProjectPreviewProps) {
  return (
    <div
      className={`project-preview ${featured ? "project-preview--featured" : ""}`}
      data-project={project.id}
      aria-hidden="true"
    >
      <div className="project-preview__glow" />
      <WindowChrome project={project}>
        <ProjectInterface project={project} />
      </WindowChrome>
      <div className="project-preview__label"><span>{project.category}</span><span>{project.status}</span></div>
    </div>
  );
}
