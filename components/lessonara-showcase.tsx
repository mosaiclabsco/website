import type { Dictionary } from "@/lib/dictionaries";
import { LessonaraBrand } from "./lessonara-brand";
import {
  SquaresFour,
  CalendarBlank,
  Users,
  BookOpen,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

export function LessonaraShowcase({
  text,
  concept,
}: {
  text: Dictionary["preview"];
  concept: string;
}) {
  const navigation = [
    { Icon: SquaresFour, label: text.overview },
    { Icon: CalendarBlank, label: text.lessons },
    { Icon: Users, label: text.students },
    { Icon: BookOpen, label: text.materials },
  ];
  return (
    <div className="lessonara-showcase" data-reveal>
      <div className="lessonara-screen lessonara-ui" aria-hidden="true">
        <div className="lessonara-ui-toolbar">
          <div className="lessonara-ui-dots">
            <i />
            <i />
            <i />
          </div>
          <span>lessonara / {text.label}</span>
          <ArrowUpRight size={13} />
        </div>
        <div className="lessonara-ui-workspace">
          <aside className="lessonara-ui-sidebar">
            <LessonaraBrand />
            {navigation.map(({ Icon, label }, index) => (
              <div
                className={`lessonara-ui-nav${index === 0 ? " selected" : ""}`}
                key={label}
              >
                <Icon size={13} />
                <span>{label}</span>
              </div>
            ))}
          </aside>
          <div className="lessonara-ui-main">
            <span className="lessonara-ui-eyebrow">{text.label}</span>
            <h4>{text.heading}</h4>
            <p>{text.subtitle}</p>
            <div className="lessonara-ui-plan-heading">
              <strong>{text.week}</strong>
              <span>↓</span>
            </div>
            <div className="lessonara-ui-planner">
              <div className="lessonara-ui-days">
                {text.days.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="lessonara-ui-grid">
                <div className="lessonara-ui-lesson speaking">
                  <span>{text.conversation}</span>
                  <strong>{text.speaking}</strong>
                </div>
                <div className="lessonara-ui-lesson vocabulary">
                  <span>{text.activity}</span>
                  <strong>{text.vocabulary}</strong>
                </div>
                <div className="lessonara-ui-lesson listening">
                  <span>{text.lesson}</span>
                  <strong>{text.english}</strong>
                </div>
              </div>
            </div>
            <div className="lessonara-ui-materials">
              <span>
                <BookOpen size={12} />
                {text.bottom}
              </span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </div>
      <span className="lessonara-ui-caption">{concept}</span>
    </div>
  );
}
