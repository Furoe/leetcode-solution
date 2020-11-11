/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let width = Math.min(C, G) - Math.max(A, E);
    let height = Math.min(D, H) - Math.max(B, F);
    let commonArea = Math.max(width, 0) * Math.max(height, 0);
    return (C-A)*(D-B) + (G-E)*(H-F) - commonArea;
};