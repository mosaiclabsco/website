import type { Dictionary } from "@/lib/dictionaries";
export function LessonaraPreview({
  text,
  concept,
}: {
  text: Dictionary["preview"];
  concept: string;
}) {
  return (
    <div className="product-visual">
      <div className="product-visual-label">
        <span>lessonara</span>
        <span>01 / SaaS</span>
      </div>
      <div className="lessonara-window" aria-hidden="true">
        <div className="window-toolbar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>lessonara / {text.label}</span>
          <span>↗</span>
        </div>
        <div className="workspace">
          <aside className="workspace-sidebar">
            <div className="lessonara-brand">
              l<span>lessonara</span>
            </div>
            <div className="sidebar-item selected">
              ◫ <span>{text.overview}</span>
            </div>
            <div className="sidebar-item">
              ▦ <span>{text.lessons}</span>
            </div>
            <div className="sidebar-item">
              ♧ <span>{text.students}</span>
            </div>
            <div className="sidebar-item">
              ▤ <span>{text.materials}</span>
            </div>
          </aside>
          <div className="workspace-main">
            <span className="workspace-eyebrow">{text.label}</span>
            <h4>{text.heading}</h4>
            <p>{text.subtitle}</p>
            <div className="planner-heading">
              <strong>{text.week}</strong>
              <span>↓</span>
            </div>
            <div className="planner">
              <div className="planner-days">
                {text.days.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="planner-grid">
                <div className="lesson-block lavender">
                  <span>{text.conversation}</span>
                  <strong>{text.speaking}</strong>
                </div>
                <div className="lesson-block mint">
                  <span>{text.activity}</span>
                  <strong>{text.vocabulary}</strong>
                </div>
                <div className="lesson-block peach">
                  <span>{text.lesson}</span>
                  <strong>{text.english}</strong>
                </div>
              </div>
            </div>
            <div className="materials-row">
              <span>▤ {text.bottom}</span>
              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
      <span className="concept-caption">{concept}</span>
    </div>
  );
}
