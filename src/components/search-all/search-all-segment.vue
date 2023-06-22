<template>
  <line :x1="getPositions.line.x1" :y1="getPositions.line.y1" :x2="getPositions.line.x2"
        :y2="getPositions.line.y2" :stroke="getFillColor()" stroke-width="1"/>
  <rect :id="(()=>{return 'ai-search-all-segment-' + index;})()" :x="getPositions.rect.x" :y="getPositions.rect.y"
        :width="rectData.width"
        :height="rectData.height" rx="25"
        ry="25" :fill="getFillColor()" @click="()=>{onClick(index)}"
        @mouseover="(e)=>{if (searchCount !== 0) {e.target.setAttribute('fill', 'chocolate');}}"
        @mouseout="(e)=>{e.target.setAttribute('fill',getFillColor());}"/>
  <text class="ai-search-all-segment" :x="getPositions.text.x" :y="getPositions.text.y" text-anchor="middle"
        fill="#ffffff"
        style="font: normal 16px sans-serif;" @click="()=>{onClick(index)}"
        @mouseover="(e)=>{if (searchCount !== 0) {hovered=true;}}"
        @mouseout="(e)=>{hovered=false;}">
    {{ text }}
  </text>
  <text class="ai-search-all-segment" :x="getPositions.count.x" :y="getPositions.count.y" text-anchor="middle"
        fill="yellow"
        style="font: normal 12px sans-serif;" @click="()=>{onClick(index)}">
    {{ searchCount }}
  </text>
</template>

<script>
export default {
  name: "search-all-segment",
  props: {
    text: {
      type: String,
      default: 'item text'
    },
    searchCount: {
      type: Number,
      default: 0
    },
    parent: {
      type: Object,
      default: () => ({
        size: {width: 400, height: 400}
      })
    },
    index: {
      type: Number,
      default: 0
    },
    segmentClick: {
      type: Function,
      default: () => ({})
    },
    delta: {
      type: Object,
      default: () => {
        return {
          x: 50,
          y: -120
        }
      }
    }
  },
  data() {
    return {
      rectData: {
        width: 185,
        height: 50,
      },
      hovered: false
    }
  },
  mounted() {
    console.log(this.position)
  },
  methods: {
    getFillColor() {
      if (this.$props.searchCount === 0) {
        return '#ccc'
      } else {
        if (this.hovered) {
          return 'chocolate'
        } else {
          return '#D2841EFF'
        }
      }

    },
    getPositionRect(index, parentSize) {
      switch (index) {
        case 0: {
          const rectX = 22;
          const rectY = ((parentSize.height / 2) | 0) - ((this.rectData.height / 2) | 0) + 40;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 1: {
          const rectX = 101;
          const rectY = ((parentSize.height / 2) | 0) - 72;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 2: {
          const rectX = 42;
          const rectY = ((parentSize.height / 2) | 0) - 158;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 3: {
          const rectX = 192;
          const rectY = ((parentSize.height / 2) | 0) - 240;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 4: {
          //const position3 = this.getPositionRect(3, parentSize)
          const rectX = 324
          const rectY = 590
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 5: {
          const rectX = 420;
          const rectY = ((parentSize.height / 2) | 0) - 240;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 6: {
          const rectX = 574;
          const rectY = ((parentSize.height / 2) | 0) - 158;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 7: {
          const rectX = 512;
          const rectY = ((parentSize.height / 2) | 0) - 72;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 8: {
          const rectX = 591;
          const rectY = ((parentSize.height / 2) | 0) - ((this.rectData.height / 2) | 0) + 40;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y};
        }
        case 9: {
          const rectX = 479;
          const rectY = 501;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 10: {
          const rectX = 103;
          const rectY = 590;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        case 11: {
          const rectX = 50;
          const rectY = 501;
          return {x: rectX + this.delta.x, y: rectY + this.delta.y}
        }
        default: {
          const rectY = ((parentSize.height / 2) | 0) - ((this.rectData.height / 2) | 0) - index * (80 - index * 2);
          return {x: index * 105, y: rectY}
        }

      }
    },
    gepPositionText(index, parentSize) {
      const rectPosition = this.getPositionRect(index, parentSize)
      return {
        x: rectPosition.x + 90,
        y: rectPosition.y + 25
      }
    },
    gepPositionCount(index, parentSize) {
      const rectPosition = this.getPositionRect(index, parentSize)
      return {
        x: rectPosition.x + 95,
        y: rectPosition.y + 41
      }
    },
    gepPositionLine(index, parentSize) {
      const rectPosition = this.getPositionRect(index, parentSize)
      switch (index) {
        case 0: {
          const x1 = rectPosition.x + this.rectData.width -40;
          const x2 = (((parentSize.width / 2) | 0));
          const y1 =  340;
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y }
        }
        case 1: {
          const x1 = rectPosition.x + this.rectData.width - 15 - index * 5;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0) + index;
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 2: {
          const x1 = rectPosition.x + this.rectData.width - 15 - index * 5 + 20;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0) + index;
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 3: {
          const x1 = rectPosition.x + this.rectData.width - 15 - index * 5;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0) + index;
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 4: {
          const x1 = rectPosition.x + (80 - (index - 4) * 35) + 10;
          const y1 = 500;
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 5:
        case 6: {
          const x1 = rectPosition.x + (80 - (index - 4) * 35) + 10;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 7: {
          const x1 = rectPosition.x + (80 - (index - 4) * 35) + 120;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 8: {
          const x1 = rectPosition.x + 10;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 9: {
          const x1 = rectPosition.x + 90;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1, x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 10: {
          const x1 = rectPosition.x + 186;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        case 11: {
          const x1 = rectPosition.x + 50;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1, y1: y1 , x2: x2  + this.delta.x, y2: y2 + this.delta.y}
        }
        default: {
          const x1 = rectPosition.x + this.rectData.width - 10;
          const y1 = rectPosition.y + ((this.rectData.height / 2) | 0);
          const x2 = (((parentSize.width / 2) | 0));
          const y2 = (((parentSize.height / 2) | 0));
          return {x1: x1 + this.delta.x, y1: y1 + this.delta.y, x2: x2 + this.delta.x, y2: y2 + this.delta.y}
        }
      }
    },

    onClick(index) {
      this.$props.segmentClick(index)
    }
  },
  computed: {
    getPositions: function () {
      const rectPosition = this.getPositionRect(this.$props.index, this.$props.parent.size)
      const positionText = this.gepPositionText(this.$props.index, this.$props.parent.size)
      const positionCount = this.gepPositionCount(this.$props.index, this.$props.parent.size)
      const positionLine = this.gepPositionLine(this.$props.index, this.$props.parent.size)
      return {
        rect: {
          x: rectPosition.x,
          y: rectPosition.y
        },
        text: {
          x: positionText.x,
          y: positionText.y
        },
        count: {
          x: positionCount.x,
          y: positionCount.y
        },
        line: {
          x1: positionLine.x1,
          y1: positionLine.y1,
          x2: positionLine.x2,
          y2: positionLine.y2
        }
      }
    },
  }
}
</script>

<style scoped>
.ai-search-all-segment:hover {
  cursor: default;
}
</style>
