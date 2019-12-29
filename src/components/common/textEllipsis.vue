<template>
    <article :class="[isShowing ? '' : 'textElliplise']" @click="changeShowing">
        忽然间，苏琉璃从梦中惊醒，一下坐起了身子，眼圈发红，表情悲伤至极。 “呼……呼……”
        察觉刚才的一切只是梦境，苏琉璃喘着粗气，拍打着胸脯，试图用这种方式压惊。
        与此同时，一夜几乎未眠的福伯快步走到了悍马车旁，敲打着车窗，待苏琉璃打开车窗后，关心地问：“二小姐，你没事吧？”
        “没……没事。” 苏琉璃拿开身上盖的外套，打开车门，先是摇了摇头，然后问：“雨馨姐呢？她没事吧？” “大小姐还没醒。”
        福伯轻轻叹了口气，他很清楚，苏雨馨昨晚几乎和他一样，一夜未眠，直到天麻麻亮的时候才睡着。
        “那福伯你留下来照看雨馨姐，我和胡大哥上山继续找褚神医的住处。”听到苏雨馨在睡觉，苏琉璃松了口气，提议道。
        “二小姐，你没有带长袖衣裤，就不要上山了，我已经让小胡去了。”
        说话间，福伯清晰地看到苏琉璃的腿上、胳膊上残留着一道道血痕，那些血痕都是昨天在山上被带刺的植物刮破的。
        这倒不是因为苏琉璃没有登山或者野外生存经验——按照苏家老爷子的安排，由福伯和姓胡的苏家保镖陪着苏雨馨前来找褚玄机，至于……苏琉璃则是未经苏家老爷子的允许，私自开车追上了他们。
        >
    </article>
</template>

<script>
export default {
    data() {
        return {
            isShowing: false
        };
    },
    methods: {
        changeShowing() {
            this.isShowing = !this.isShowing;
        }
    }
};
</script>

<style lang="scss" scoped>
.textElliplise {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
}
</style>
