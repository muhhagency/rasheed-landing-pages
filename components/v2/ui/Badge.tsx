import { Icon, type IconName } from "./Icon";

// Section label: mint-tinted pill with an icon. Replaces the old Kicker.
export function Badge({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <div className="v2-badge">
      <Icon name={icon} />
      <span>{children}</span>
    </div>
  );
}
