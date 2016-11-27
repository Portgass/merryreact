export default [{
    id: "firstRoom",
    introduction:
`Welcome to the first room. This is testing test, let's see, how much can I fit
in here, Welcome to the first room. This is testing test, let's see, how much
can I fit in here.`,
    canTravelTo: ["secondRoom"]
}, {
    id: "secondRoom",
    introduction:
`You went into the second room. There's a goblin sitting here.`,
    canTravelTo: ["firstRoom"]
}]
