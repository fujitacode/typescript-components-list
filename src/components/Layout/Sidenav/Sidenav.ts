import { LinkText } from "../../LinkText/LinkText";

const navItems = [
    { label: "ホーム", href: "/" },
    { label: "プロフィール", href: "/profile" },
    { label: "プロジェクト", href: "/projects" },
    { label: "お問い合わせ", href: "/contact" },
];

export const Sidenav = () => {
    const navItem = (item: { label: string; href: string }) => `
        <li class="sidenav_item">
            ${LinkText(item.label, { href: item.href })}
        </li>
    `;

    return (`
        <nav class="sidenav">
            <ul class="sidenav_items">
                ${navItems.map(navItem).join("")}
            </ul>
        </nav>
    `);
};