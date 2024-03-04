function Tip() {}
Tip.prototype.CalculateTip = function (p1) {
  return 20;
  // hard-code a result that will FAIL
};
module.exports.Tip = Tip;