"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isRow = common_vendor.ref(true);
    const rule = common_vendor.ref(false);
    const isDisabled = common_vendor.ref(false);
    const diceArr = common_vendor.ref([0, 0, 0, 0, 0]);
    const innerAudioContext = common_vendor.index.createInnerAudioContext();
    innerAudioContext.src = "/static/48fhb-v5ksp.mp3";
    const rollDice = () => {
      for (let i = 0; i < diceArr.value.length; i++) {
        diceArr.value[i] = Math.floor(Math.random() * 6) + 1;
      }
      console.log(diceArr.value);
      innerAudioContext.play();
    };
    const isHide = () => {
      isRow.value = !isRow.value;
      isDisabled.value = !isDisabled.value;
    };
    const isRule = () => {
      rule.value = !rule.value;
      console.log(rule.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !rule.value
      }, !rule.value ? {} : {}, {
        b: rule.value
      }, rule.value ? {} : {}, {
        c: common_vendor.o(isRule),
        d: isRow.value
      }, isRow.value ? {
        e: common_vendor.f(diceArr.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      } : {}, {
        f: common_vendor.o(rollDice),
        g: isDisabled.value,
        h: isRow.value,
        i: !isRow.value,
        j: common_vendor.o(isHide)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/Code/HBuilder_code/Roll-dice/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
