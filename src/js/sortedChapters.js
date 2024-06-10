export default function sortedChapters(unsortedArr) {
    return unsortedArr.sort((a, b) => b.health - a.health);
}