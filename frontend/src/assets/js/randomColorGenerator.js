export const randomColor = () => {
    const colorNumber = Math.floor(Math.random()*16777215).toString(16);
    return `#${colorNumber}`;
}