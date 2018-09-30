/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if (!isFinite(n)) return;
    if (!(parseInt(n) === parseFloat(n))) return;
    if (n <= 0) return;
    if (isNaN(n)) return;
    return Math.pow(m, n);
}