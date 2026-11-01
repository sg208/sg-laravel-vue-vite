// Each role keeps one pale tint of its own hue (tokens in resources/css/app.css).
// Full class strings so Tailwind can find them.
const ROLE_TONES = {
    boss: "bg-(--role-boss-bg) text-(--role-boss-ink)",
    developer: "bg-(--role-developer-bg) text-(--role-developer-ink)",
    designer: "bg-(--role-designer-bg) text-(--role-designer-ink)",
    intern: "bg-(--role-intern-bg) text-(--role-intern-ink)",
};

const NEUTRAL_TONE = "bg-surface text-ink";

// Order of the summary: most senior first.
export const ROLE_ORDER = ["boss", "developer", "designer", "intern"];

export const getRoleTone = (role) => ROLE_TONES[role] ?? NEUTRAL_TONE;

export const pluralizeRole = (role, count) => {
    if (count === 1) return role;
    return role === "boss" ? "bosses" : `${role}s`;
};

// Count wizkids per role, known roles first in ROLE_ORDER, unknown roles after.
export const countRoles = (wizkids = []) => {
    const counts = new Map();
    wizkids.forEach((wizkid) => {
        const role = wizkid.role ?? "no role";
        counts.set(role, (counts.get(role) ?? 0) + 1);
    });
    const rank = (role) => {
        const index = ROLE_ORDER.indexOf(role);
        return index === -1 ? ROLE_ORDER.length : index;
    };
    return [...counts.entries()]
        .map(([role, count]) => ({ role, count }))
        .sort((first, second) => rank(first.role) - rank(second.role));
};
