export default [{
    id: "l:compartment",
    name: "Compartment",
    canTravelTo: [],
    onEnter: {
        events: [{
            type: "printStory",
            story: [
`You can hardly hold your excitement as you are sitting in a chugging train.`,
`This will be your first year at Hogwarts. Magic is so amazing.`,
`As no one in your family can't use magic, you grateful that you can experience
the world of spells and magic beasts.`,
`When you got your mail from Hogwarts, you didn't believe it, but you got
visited by an actual wizard that told you the truth.`,
`Your parents were very surprised too, but in the end they decided to send you
to learn magic.`,
`And now you are here on your way to the magic school.`,
`
***`,
`You are sitting in a compartment car. There are two other girls.`
        ]}]
    },
    characters: [{
        id: "c:tracey:intro",
        name: "Tracey Farley",
        onInvestigate: {
            message:
`Frail young girl. Dark curly hair is covering part of her face, but you can see
one of her emerald eyes, which she is inspecting you with. It seems to be her
first year at Hogwarts too.`
        },
        conversations: [{
            id: "c:tracey:intro:greeting",
            name: "Greet her",
            messages: [
                "She smiles.",
                "Tracey: Hello, I'm Tracey. It's nice to meet you.",
                "Tracey: Are you excited for Hogwarts?."
            ],
            events: [{
                type: "deleteConversation",
                character: "c:tracey:intro",
                conversation: {
                    id: "c:tracey:intro:greeting"
                }
            }, {
                type: "addConversation",
                character: "c:tracey:intro",
                conversation: {
                    id: "c:tracey:intro:excited:yes",
                    name: "I am very excited!",
                    messages: [
                        "Tracey: Me too!",
                        "Tracey: We will have so much fun.",
                        "Tracey: I wonder what house will I be sorted into."
                    ],
                    events: [{
                        type: "deleteConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:excited:yes"
                        }
                    }, {
                        type: "addConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:ask_sister",
                            name: "Who is that girl looking out of window?",
                            messages: [
                                "Tracey: Oh that is my sister Gemma.",
                                "Tracey: I think, that she is thinking about the boy, she likes again."
                            ],
                            events: [{
                                type: "deleteConversation",
                                character: "c:tracey:intro",
                                conversation: {
                                    id: "c:tracey:intro:ask_sister"
                                }
                            }, {
                                type: "addConversation",
                                character: "c:gemma:intro",
                                conversation: {
                                    id: "c:gemma:intro:introduction",
                                    name: "Greet Gemma",
                                    messages: [
                                        "You disturb the girl's thoughts. But she smiles at you.",
                                        "Gemma: Hello. I am Gemma. I am prefect for Slytherin.",
                                        "Gemma: It looks like you girls made friends already.",
                                        "Gemma: If you have some questions, just ask."
                                    ],
                                    events: [{
                                        type: "deleteConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:introduction"
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:slytherin",
                                            name: "Do you like being in Slytherin?",
                                            messages: [
                                                "Gemma: Of course I do.",
`Gemma: It may look, like there aren't good people in there. But actually plenty
of great wizards were from Slytherin. If you work hard Slytherin will help you
achieve your dreams.`,
`Gemma: Although there is some prejudice against mudbloods. Our family is Pure,
but we don't discriminate them. It doesn't seem important.`
                                            ]
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:prefect",
                                            name: "Is it hard being prefect?",
                                            messages: [
`Gemma: It's rewarding. You have some additional responsibilities, but if you
want high position in Ministry, you should aim for that badge.`,
`Gemma: Don't think I will make it easier for you girls, just because we know
each other. I will specifically keep an eyes on you.`,
`Gemma: Or maybe, when it comes to my sister, I will need both eyes.`
                                            ]
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:there_yet",
                                            name: "When are we gonna arrive?",
                                            messages: [
`Gemma: Look! The castle is just behind the mountain. You should see it any moment.`,
`As you look out of the window, the Hogwards starts emerging. Such a beautiful
place.`,
`It makes you so excited.`
                                            ],
                                            events: [{
                                                type: "addLocation",
                                                location: "l:sorting"
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }]
    }, {
        id: "c:gemma:intro",
        name: "Gemma Farley",
        onInvestigate: {
            message:
`Older girl. She looks similiar to the one next to her. She seems to be lost in
thoughts and is staring out of window.`
        },
        conversations: []
    }]
}, {
    id: "l:sorting",
    name: "Sorting ceremony",
    canTravelTo: [],
    onEnter: {
        events: [{
            type: "printStory",
            story: [
`The train stopped at a station under Hogwarts' lake. All the first years are
gathered together and they are waiting for boats to get them to Hogwarts.`,
`You go into the same boat as Tracey. There are other 6 students that you don't
know. One of them is girl, that looks at you with disgust.`,
`Blonde girl: What do we have here? The dirty mudblood, that my parents warned
me about is in the same boat. Don't think you will have it easy here.`,
`Boy: Pansy, ignore that Mudblood, you don't want to be asociated with her.`,
`Tracey: Let them be Lou. We will show them, what we stand for.`,
`Fighting spirit burns in you, but you let it go. You can't make a scene on the
first day. Instead you focus on the beautiful castle, that you are approaching`,
`***`,
`You climb the main stairs and are standing in front of the huge doors that lead
to the Great Hall.`,
`The doors slowly open and you spot all the Hogwarts students sitting in a four
lines of tables. Professor McGonagall is leading you to the front, where chair
is prepared.`,
`All the first years are called one by one, soon Tracey is coming up. She gets
sorted into Slytherin, like her sister. She seems happy about it. Pansy goes
right after her. She is also sorted into Slytherin. She smirks proudly.`,
`Your name gets called after that.`,
`You slowly walk up the stairs and sit onto the chair. Professor puts the
Sorting hat on your head.`,
`Sorting hat: Hm... Interesting, you seem to have almost no magic roots. Where
do I put you. You seem determined.`,
`Sorting hat: Also it seems that fate has prepared a road for you already.`,
`Sorting hat: ...`,
`Sorting hat: Third in a row. Slytherin!`,
`You jump of the chair and head to the Slytherin tables. Tracey is welcoming
you. It seems you will be friends. But you will be also in the same house as
that Pansy.`
        ]}]
    },
    characters: [{
        id: "c:tracey:sorting",
        name: "Tracey Farley",
        onInvestigate: {
            message: "Something feels special about Tracey. Maybe it's her temperament."
        },
        conversations: [{
            id: "c:tracey:sorting:greeting",
            name: "We meet again!",
            messages: [
                "Tracey: Great! I hope we can be good friends.",
`Tracey: And now that we are in the same house, I have some tricks I want to
show you later, that Gemma told me about.`
            ],
            events: [{
                type: "addLocation",
                location: "l:common_room:act1"
            }]
        }]
    }, {
        id: "c:gemma:sorting",
        name: "Gemma Farley",
        onInvestigate: {
            message:
`Gemma gives you a wink, but is preoccupied with talking with her friends. She
seems to be a popular girl.`
        },
        conversations: []
    }, {
        id: "c:pansy:sorting",
        name: "Pansy Parkinson",
        onInvestigate: {
            message:
`You heard that her full name is Pansy Parkinson. She comes from a family that
is agains from all breeding with muggles.`
        },
        conversations: []
    }]
}, {
    id: "l:common_room:act1",
    name: "Slytherin Common room",
    canTravelTo: ["l:bedroom:act1", "l:hallway:act1"],
    onEnter: {
        message:
`You enter Slytherin Common room. It's filled with gothic furniture. There are
few people around.`
    },
    places: [{
        id: "p:mirror",
        name: "Mirror stand",
        onInvestigate: {
            message:
`The antique mirror conatins weird magic. There is a sign - no touching.
You try to reach for it. But you quickly get interrupted by the headgirl.
Headgirl: Hey! No touching!.`,
            events: []
        },
        onInteraction: [{
            item: "i:fake_mirror",
            message:
`You wait for your moment, when the headgirl is not paying attention. Quckly
take the mirror and replace it with Pansy's one.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:mirror",
                    name: "Mysterious mirror",
                    onPickup:
`You take the mirror and quickly hide it in your pocket.
You go to some more secluded place and look into it. Some image starts showing
instead of your reflection. You focus hard on your luggage and it shows you
the Grand staircase. You wait patiently and you rise to the fourth floor,
right next to the stairs, there is your luggage.
The image cuts off right when you see that.`
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:fake_mirror"
                }
            }]
        }]
    }],
    characters: [{
        id: "c:headgirl:common_room",
        name: "Headgirl",
        onInvestigate: {
            message:
`The Headgirl is sitting on a couch in the middle of the Common room. She is
reading her book. But you notice that she is scanning the Common room for any
mishaps regularly.`
        },
        conversations: []
    }, {
        id: "c:niles:common_room",
        name: "Niles",
        onInvestigate: {
            message:
`The boy seems quite nervous and is walking around the girls bedrooms.`
        },
        onInteraction: [{
            item: "i:handkerchief",
            message:
`Right when you take out the handkerchief Niles grabs it from you and starts to
sniff it.
After a moment, he realises that you are still there.
Niles: Oh right, I will tell you how the things are.
Niles: He likes. Sometimes he even talks about her, I can give you a note, with
the things he always talks about.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:note",
                    name: "Note",
                    onPickup: "Gemma should be pleased, if I give this to her."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:handkerchief"
                }
            }, {
                type: "deleteConversation",
                character: "c:niles:common_room",
                conversation: {
                    id: "c:niles:common_room:weird"
                }
            }, {
                type: "deleteConversation",
                character: "c:niles:common_room",
                conversation: {
                    id: "c:niles:common_room:gemma"
                }
            }]
        }],
        conversations: [{
            id: "c:niles:common_room:greeting",
            name: "Hey, how are you?",
            messages: [
                "You startle Niles a bit.",
                "Niles: Hey, I am g..good.",
                "Niles: I am just looking around here."
            ],
            events: [{
                type: "addConversation",
                character: "c:niles:common_room",
                conversation: {
                    id: "c:niles:common_room:lucinda",
                    name: "Sure...",
                    messages: [
`Niles awkwardly smiles`,
`Niles: Um, do you by any chance know Lucinda?`,
`Not really.`,
`Niles: Oh, that's a shame. She's the most perfect girl I know.`,
`Niles: She's so pretty and smells nice too!`
                    ],
                    events: [{
                        type: "addConversation",
                        character: "c:niles:common_room",
                        conversation: {
                            id: "c:niles:common_room:gemma",
                            name: "Do you know a girl called Gemma?",
                            messages: [
`Niles thinks for a bit
Niles: Oh yeah, she's prefect.`,
`I kinda need to find out if the boy, that she is always with likes her.`,
`Niles: I can easily tell you, but I want something for it.
Niles: Lucinda always carries around this handkerchief and I want it.
It must smell so nice.`
                            ],
                            events: []
                        }
                    }, {
                        type: "addConversation",
                        character: "c:niles:common_room",
                        conversation: {
                            id: "c:niles:common_room:weird",
                            name: "Tell me about this Lucinda",
                            messages: [
`Niles: As I already said, she's the most perfect girl I could wish for.
Niles: Smart, beautiful, but the most important part - the smell!
Niles: Whenever I smell her, I get this tingling feeling`,
`You slowly start to back away as he starts to go into too much details about
Lucinda's smell.`
                            ],
                            events: []
                        }
                    }, {
                        type: "deleteConversation",
                        character: "c:niles:common_room",
                        conversation: {
                            id: "c:niles:common_room:lucinda"
                        }
                    }]
                }
            }, {
                type: "deleteConversation",
                character: "c:niles:common_room",
                conversation: {
                    id: "c:niles:common_room:greeting"
                }
            }]
        }]
    }]
}, {
    id: "l:bedroom:act1",
    name: "Girls bedroom",
    canTravelTo: ["l:common_room:act1"],
    onEnter: {
        message: "You come up into the bedrooms. People are unpacking their luggages."
    },
    places: [{
        id: "p:bed",
        name: "Bed",
        onInvestigate: {
            message:
`This is your bed. It's nicely made up. Your luggage is missing tho. You will
have to find that, so you can start unpackinf all your things.`,
            events: []
        },
        onInteraction: [{
            item: "i:luggage",
            message:
`Gemma helps you bring your luggage here. Now you can finally start getting
ready for your first year at Hogwarts.`,
            events: [{
                type: "printStory",
                story: [
`You finish your unpacking bit later that anybody else. But you still are on
time. You scomfortably lay in the bed and think about all of your adventures,
that are waiting for you.`,
`
***`,
`You get woken up early in the morning by Tracey. She is very excited too.
It's gonna be your first day of learning magic.`,
`This is your first step into the Wizarding World.`
            ]}]
        }]
    }],
    characters: [{
        id: "c:tracey:bedroom",
        name: "Tracey Farley",
        onInvestigate: {
            message: "Tracey is sitting on the bed next to yours unpacking her stuff."
        },
        conversations: [{
            id: "c:tracey:bedroom:greeting",
            name: "How is the unpacking going?",
            messages: [
                "Tracey: I am almost done. Have you found your luggage yet?",
                "No, I still don't know where it is."
            ],
            events: []
        }, {
            id: "c:tracey:bedroom:boy",
            name: "Do you know a boy called Niles?",
            messages: [
                "Tracey: Yeah, he's always going on about this girl. I don't remember her name.",
                "The girls name is Lucinda. He asked me to get her hankerchief for him.",
                "It's a bit weird, but I need other favor from him.",
`Tracey: Oh that shouldn't be a problem. Just wait here I will sneak up to her
place.`,
"But wait! You can't really ... do ... that ...",
"Tracey is back in a minute.",
"Tracey: Hey here I got it.",
"Um.. thanks."
            ],
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:handkerchief",
                    name: "Lucinda's hankerchief",
                    onPickup:
`You take the hankerchief from Tracey. You are bit conflicted about it.`
                }
            }]
        }]
    }, {
        id: "c:pansy:bedroom",
        name: "Pansy Parkinson",
        onInvestigate: {
            message:
`Pansy is sitting on the window and looking at herself in the mirror. She seems
very occupied with admiring her beauty.`
        },
        onInteraction: [{
            item: "i:muffin",
            message:
`You walk up to Pansy and ask if she wants a muffin. She looks suspition, but
int he end can't resist the muffin and takes it.
You wait a moment and then quickly reach for the mirror, she  put on the table.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:fake_mirror",
                    name: "Pansy's mirror",
                    onPickup: "You quickly grab the mirror, before Pansu can see you."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:muffin"
                }
            }, {
                type: "deleteConversation",
                character: "c:pansy:bedroom",
                conversation: {
                    id: "c:pansy:bedroom:mirror_try"
                }
            }]
        }],
        conversations: [{
            id: "c:pansy:bedroom:mirror_try",
            name: "Could I by any chance borrow your mirror?",
            messages: [
`Pansy just looks at you...
Pansy: Are you kidding me! Of course not!`
            ],
            events: []
        }]
    }]
}, {
    id: "l:hallway:act1",
    name: "Hallway",
    canTravelTo: ["l:common_room:act1", "l:staircase:act1"],
    onEnter: {
        message:
`You enter hallway, that Slytherin and Gryffindor houses share. Gemma is sitting
on a bench nearby reading a book.`
    },
    characters: [{
        id: "c:gemma:hallway",
        name: "Gemma Farley",
        onInvestigate: {
            message:
`Gemma is standing around a nearby bench with her friends, some of them are from
Gryffindor and one is even from a Hufflepuff.`
        },
        onInteraction: [{
            item: "i:note",
            message:
`You approach Gemma and try to get her attention.
Gemma: Hey, can you wait for a later? Don't worry I will go get you.
Just just smile and hand her the note.
Gemma: Oh, what is this?
You get closer to her and whisper in her ear, what is the note containing.
She suddenly smiles. Her eyes sparkle.
Gemma: Oh my gosh! Thank you so much for this. Hey, whenever you need something,
just tell me.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:gemma_help",
                    name: "Favor from Gemma",
                    onPickup: "Gemmas promised to help you."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:note"
                }
            }, {
                type: "deleteConversation",
                character: "c:gemma:hallway",
                conversation: {
                    id: "c:gemma:hallway:greeting"
                }
            }, {
                type: "addConversation",
                character: "c:gemma:hallway",
                conversation: {
                    id: "c:gemma:hallway:greeting_new",
                    name: "Say hi",
                    messages: [
    `You walk up to Gemma`,
    `Gemma: Hey, if you have anything you need, just tell me.`
                    ],
                    events: []
                }
            }]
        }, {
            item: "i:location",
            message:
`Hey Gemma, can you help me a bit? I lost my luggage, but I found it now. The
thing is, that it's stuck on the stairs and I need help to get it back
Gemma: Of course! I told you anything. Let's go get it.
You and Gemma depart for the luggage. She uses her knowledge of spells and uses
levitation to easily get it.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:lugagge",
                    name: "Your lost luggage",
                    onPickup: "Your lost luggage, that Gemma is helping get back:"                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:location"
                }
            }]
        }],
        conversations: [{
            id: "c:gemma:hallway:greeting",
            name: "Try to say hi to Gemma",
            messages: [
`You walked to the Gemma's group, she notices you after a moment`,
`Gemma: Hi. Sorry, I am a little busy now, you can go find me later.`,
`She quickly goes back again to talking with the group.`
            ],
            events: []
        }]
    }]
}, {
    id: "l:staircase:act1",
    name: "Grand staircase",
    canTravelTo: ["l:hallway:act1", "l:entrance_hall:act1", "l:kitchen:act1"],
    onEnter: {
        message: "The famous Grand staircase. Be careful about where it will take you."
    },
    places: [{
        id: "p:stairs",
        name: "Stairs",
        onInvestigate: {
            message:
`You have to be careful about these stairs, otherwise, they will take you to
very strange places.`,
            events: []
        },
        onInteraction: [{
            item: "i:mirror",
            message:
`You let the stairs take you to the place, you saw in the mirror. And when you
arrive there, you actually see your lost bag. You are very excited. The problem
is that the luggage is too heavy and you can't take it by yourself.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:location",
                    name: "Luggage location",
                    onPickup: "You write the floor on which the luggage is to your notepad."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:mirror"
                }
            }]
        }]
    }],
    characters: [{
        id: "c:painting:staircase",
        name: "Giffard Abbott's painting",
        onInvestigate: {
            message:
`Painting of a previous Hogwarts headmaster from early ages. He has a dog, that
is sitting nearby him.`
        },
        conversations: []
    }]
}, {
    id: "l:entrance_hall:act1",
    name: "Entarnce hall",
    canTravelTo: ["l:staircase:act1"],
    onEnter: {
        message:
`This is the main entrance to Hogwarts, where you entered. Professor Dumbledore
is walking around at the bottom of the stairs.`
    },
    characters: [{
        id: "c:dumbledore:entrance_hall",
        name: "Proffesor Dumbledore",
        onInvestigate: {
            message:
`Proffesor Dumbledore is inspecting all the commotion of the first schoold day.
He is satisfied how everything is working out. His back was turned to you, but
as you started to stare at him, he looked back at you and gave you a smile.`
        },
        conversations: []
    }, {
        id: "c:malfoy:entrance_hall",
        name: "Draco Malfoy",
        onInvestigate: {
            message:
`The blonde boy is standing in the middle of the hall and his expressions makes
it look, that it's all his.`
        },
        conversations: []
    }]
}, {
    id: "l:kitchen:act1",
    name: "Kitchen",
    canTravelTo: ["l:staircase:act1"],
    onEnter: {
        message:
`You managed to sneak into the kitchens. Cooks are cleaning up after the feast.`
    },
    characters: [{
        id: "c:helper:act1",
        name: "Kitchen Helper",
        onInvestigate: {
            message: "He seems to be lazying around too much, for what needs to be done."
        },
        conversations: []
    }, {
        id: "c:cook:act1",
        name: "Cook",
        onInvestigate: {
            message:
`Quite a big man. For some unknown reasons, he had grown a terrible pencil
mustache.`
        },
        conversations: [{
            id: "c:cook:act1:greeting",
            name: "Hello, do you need some help?",
            messages: [
`Cook: Yes of course we need help. Look at this mess, it's every year like this,
go and take the muffins out of the oven.`,
`He looks at you.`,
`Cook: Oh you are a student. You can't be here.`,
            ],
            events: [{
                type: "deleteConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:greeting"
                }
            }, {
                type: "addConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:offer_help",
                    name: "But I can bake, don't you need help?",
                    messages: [
`Cook: No! You should leave as soon as possible. If the teachers find out, you
will be in a trouble. You don't want to cost your house points right on the
first day here, do you?`
                    ]
                }
            }, {
                type: "addConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:ask_muffins",
                    name: "Can I at least have one muffin?",
                    messages: [
`Cook: No! We have exactly as many muffins, as we need. I can't give you none.
Now get out!`
                    ],
                    events: [{
                        type: "addConversation",
                        character: "c:helper:act1",
                        conversation: {
                            id: "c:helper:act1:greeting",
                            name: "You don't seem very occupied here.",
                            messages: [
`The helper looks curiously at you.`,
`Helper: What do we have here. Don't be rude girl. They are not paying me
enough for me to work hard.`
                            ],
                            events: [{
                                type: "addConversation",
                                character: "c:helper:act1",
                                conversation: {
                                    id: "c:helper:act1:muffin",
                                    name: "Can I get one of the muffins?",
                                    messages: [
`Helper: You can't. The cook counts them and he will know if you take one.`,
`Helper: But I will tell you, what you can do. You see, I still need to make one
more batch. And if you will make it instead of me, you can do one more and take
taht one. All the required things are in the kitchen, so you can start.`
                                    ]
                                }
                            }]
                        }
                    }]
                }
            }]
        }]
    }],
    places: [{
        id: "p:counter",
        name: "Counter",
        onInvestigate: {
            message: "There is a mess of recipes on the kitchen counter.",
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:recipe_muffin",
                    name: "Muffin recipe",
                    from: "p:counter",
                    onPickup:
`Making muffins 101:
Find a hippogriff and steal his eggs (don't die, while doing that).
Get some magic flour and sugar from your regular magic convinienc store.
Take all ingrediences, mash them together and use them on this recipe.`
                }
            }]
        }
    }, {
        id: "p:fridge",
        name: "Magic fridge",
        onInvestigate: {
            message:
`When you open the fridge, you see land of endless ice. You see a sign with eggs
on a nearby glacier.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:eggs",
                    name: "Hippogriff eggs",
                    from: "p:fridge",
                    onPickup:
`These eggs are much bigger, than the ones, you are used to.`
                }
            }]
        }
    }, {
        id: "p:cabinet",
        name: "Cabinet",
        onInvestigate: {
            message:
`After opening a cabinet, you see all the stuff, you would in the kitchen.
Except everything seems to be some sort of a wizard brand.`,
            events: [{
                type: "spawnItem",
                from: "p:cabinet",
                item: {
                    id: "i:flour",
                    name: "Wizarding Wheat Self-Charmed Flour",
                    onPickup:
`Hopefully this wheat will work.`,
                    onInteraction: [{
                        item: "i:sugar",
                        message: "You mixed the flour and sugar.",
                        events: [{
                            type: "spawnItem",
                            item: {
                                id: "i:sugarflour",
                                name: "Flour with sugar",
                                onPickup: "You take the now slightly sweet flour.",
                                onInteraction: [{
                                    item: "i:eggs",
                                    message: "You throw the eggs inside the flour mix.",
                                    events: [{
                                        type: "spawnItem",
                                        item: {
                                            id: "i:dough",
                                            name: "Dough",
                                            onPickup: "The mixed ingredients make up dough now.",
                                            onInteraction: [{
                                                item: "i:recipe_muffin",
                                                message:
`You cover the dough with recipe and the dough begins to reform and warm up.
After a while it splits into smaller parts and jumps into prepared bowls.
Suddenty all parts make a little puff and muffins emerge.`,
                                                events: [{
                                                    type: "spawnItem",
                                                    item: {
                                                        id: "i:muffin",
                                                        name: "Muffin",
                                                        onPickup: "You steal one muffin and put it into your pocket quickly."
                                                    }
                                                }, {
                                                    type: "destroyItem",
                                                    item: {
                                                        id: "i:dough"
                                                    }
                                                }, {
                                                    type: "destroyItem",
                                                    item: {
                                                        id: "i:recipe"
                                                    }
                                                }]
                                            }]
                                        }
                                    }, {
                                        type: "destroyItem",
                                        item: {
                                            id: "i:sugarflour"
                                        }
                                    }, {
                                        type: "destroyItem",
                                        item: {
                                            id: "i:eggs"
                                        }
                                    }]
                                }]
                            }
                        }, {
                            type: "destroyItem",
                            item: {
                                id: "i:flour"
                            }
                        }, {
                            type: "destroyItem",
                            item: {
                                id: "i:sugar"
                            }
                        }]
                    }]
                }
            }, {
                type: "spawnItem",
                from: "p:cabinet",
                item: {
                    id: "i:sugar",
                    name: "Elfin Sugar Crystals",
                    onPickup:
`There are elfs carrying a sugar crystals on the front cover.`
                }
            }]
        }
    }]
}]
