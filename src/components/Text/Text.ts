export const Text = (
    content: string,
    options: {
        align?: "center" | "right";
        variant?: "lead" | "small" | "muted";
        modifiers?: ("bold" | "italic" | "underline" | "strike" | "mosaic")[];
        className?: string;
    } = {},
) => {
    const { align, variant, modifiers = [], className = "" } = options;

    const modifierClasses = modifiers.map((m) => ` is-${m}`).join("");

    return (`
        <p class="text${align ? ` text--align-${align}` : ""}${variant ? ` text--variant-${variant}` : ""}${modifierClasses}${className ? ` ${className}` : ""}">
            ${content}
        </p>
    `);
};