<script>
    let t;
    function getNewTime() {
        let time = new Date()
        const s = ('0' + time.getSeconds()).slice(-2)
        const m = ('0' + time.getMinutes()).slice(-2)
        const h = ('0' + time.getHours()).slice(-2)
    
        if (s % 2) {
            t = `${h}:${m}:${s}`
        } else {
            t = `${h} ${m} ${s}`
        }
    }
    setInterval(getNewTime, 1000)

</script>

<h1>
    {t}
</h1>

<style>
    h1 {
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        font-size: 60pt;
    }
</style>


