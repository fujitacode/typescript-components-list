export const Stack = (
    content: string,
    options: {
        size?: "sm" | "md" | "lg";
        className?: string;
    } = {},
) => {
    const { size = "md", className = "" } = options;

    return (`
        <div class="stack stack--${size}${className ? ` ${className}` : ""}">
            ${content}
        </div>
    `);
};