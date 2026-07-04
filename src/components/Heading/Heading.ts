export const Heading = (
    content: string,
    size: "1" | "2" | "3" | "4" | "5" | "6",
    className: string = "",
) => {
    return `
        <h${size} class="heading heading--size-${size} ${className}">
            ${content}
        </h${size}>
    `;
};