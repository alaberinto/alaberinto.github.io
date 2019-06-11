var root = document.body

/************** HOME **************/
var Home = {
    view: function () {
        return m("section", {
            class: "hero head1 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(Poem), m(Foot)])
    }
}

var Head = {
    view: function () {
        return m("div", {
            class: "hero-head"
        }, m(Columns))
    }
}


var Columns = {
    view: function () {
        return m("div", {
            class: "columns is-mobile is-marginless"
        }, [m(ColumnLeft), m(ColumnRight)])
    }
}

var ColumnLeft = {
    view: function () {
        return m("div", {
            class: "column left has-text-black"
        }, m(Name))
    }
}

var Name = {
    view: function () {
        return m("a[href=/]", {
            class: "has-text-black name"
        }, "Alvin Laberinto")
    }
}

var ColumnRight = {
    view: function () {
        return m("div", {
            class: "column right heading has-text-weight-bold"
        }, [m(ContactLink), m(Dropdown)])
    }
}


var ContactLink = {
    view: function () {
        return m("a[href=/contact]", {
            class: "navbar-item has-text-black desktop",
            oncreate: m.route.link,
        }, "CONTACT")
    }
}

var Dropdown = {
    view: function () {
        return m("div", {
            class: "dropdown is-hoverable is-right"
        }, [m(Trigger), m(Menu)])
    }
}

var Trigger = {
    view: function () {
        return m("div", {
            class: "dropdown-trigger"
        }, m(Hamburg))
    }
}

var Hamburg = {
    view: function () {
        return m("a", {
                class: "navbar-item image has-text-black center is-hoverable"
            },
            m("i", {
                class: "fas fa-bars"
            })
        )
    }
}

var Menu = {
    view: function () {
        return m("div", {
                class: "dropdown-menu",
                role: "menu"
            },
            m("div", {
                    class: "dropdown-content"
                },
                // ABOUT ME
                m("a[href=/about]", {
                    class: "navbar-item has-text-black right",
                    oncreate: m.route.link
                }, "ABOUT ME"),
                //PROJECTS
                m("a[href=/projects]", {
                    class: "navbar-item has-text-black right",
                    oncreate: m.route.link
                }, "PROJECTS"),
                //GITHUB
                m("a[href=https://github.com/alaberinto]", {
                    class: "navbar-item has-text-black right"
                }, "GITHUB"),
                //CONTACT
                m("a[href=/contact]", {
                    class: "navbar-item has-text-black right",
                    oncreate: m.route.link,
                }, "CONTACT")))
    }
}

var Poem = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m("div", {
            class: "hidden is-overlay from-top"
        }, "on a cold and windy day,    my love for you           kept me warm and steady.   in a cold and windy world, your love for me          keeps me calm             and brings me peace."))
    }
}

var Foot = {
    view: function () {
        return m("section", {class: "hero-foot"}, m(MadeBy))
    }
}

var MadeBy = {
    view: function () {
        return m("div", {class: "light-bg has-text-white is-size-7"}, [m("span", "Made with "), m("a[href=https://mithril.js.org/]", "MithrilJS"), m("span", " and "), m("a[href=https://mithril.js.org/]", "BulmaJS")])
    }
}

/************** ABOUT **************/
var About = {
    view: function () {
        return m("section", {
            class: "hero head2 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(AboutBody), m(Foot)])
    }
}

var AboutBody = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m(AboutInfo))
    }
}

var AboutInfo = {
    view: function () {
        return m("div", {
            class: "is-overlay has-text-centered from-top"
        }, m("div", {
            class: "has-text-black name"
        }, ["About Me",
            m("div", {
                class: "name-down has-padding-top-15 has-text-left-touch is-size-5-touch "
            }, "hi, i'm alvin laberinto. i'm a full stack developer from calgary, ab, canada."),
            m("div", {
                class: "name-down has-padding-top-15 has-text-left-touch is-size-5-touch "
            }, "i graduated from the software development program at SAIT in April 2019."),
            m("div", {
                class: "name-down has-padding-top-15 has-text-left-touch is-size-5-touch "
            }, "i am completely falling in love with learning Javascript frameworks.")]))
    }
}
/************** PROJECTS **************/

var Projects = {
    view: function() {
        return m("section", {
            class: "hero head2 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(ProjectsBody)])
    }
}

var ProjectsBody = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m(ProjectsColumns))
    }
}

var ProjectsColumns = {
    view: function () {
        return m("div", {
            class: "columns is-desktop is-variable is-6"
        }, [m("div", {class: "column"}, m(Project1)),
                m("div", {class: "column"}, m(Project2)),
                m("div", {class: "column"}, m(Project3))])
    }
}

var Project1 = {
    view: function () {
        return m("div", {class: "box"},
                m("div", {class: "content"}, "Under construction"))
    }
}

var Project2 = {
    view: function () {
        return m("div", {class: "box"},
                m("div", {class: "content"}, "Under construction"))
    }
}

var Project3 = {
    view: function () {
        return m("div", {class: "box"},
                m("div", {class: "content"}, "Under construction"))
    }
}

/************** CONTACT **************/
var Contact = {
    view: function () {
        return m("section", {
            class: "hero head3 is-fullheigh}t animated fadeInUp delay-1s"
        }, [m(Head), m(ContactBody), m(Foot)])
    }
}

var ContactBody = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m(ContactInfo))
    }
}

var ContactInfo = {
    view: function () {
        return m("div", {
            class: "is-overlay has-text-centered from-top"
        }, m(ContactTitle), m(LinkHeader))
    }
}

var ContactTitle = {
    view: function () {
        return m("div", {
                class: "has-text-black email"
            }, "Shoot me an email: ",
            m("a[href=mailto:mralvinlaberinto@gmail.com]", {
                class: "has-text-danger email"
            }, "mralvinlaberinto@gmail.com"))
    }
}

var LinkHeader = {
    view: function () {
        return m("div", {
            class: "has-text-black"
        }, [m(LinkTitle), m(Links)])
    }
}

var LinkTitle = {
    view: function () {
        return m("div", {
            class: "email has-padding-top-25"
        }, "Check out my profiles:")
    }
}

var Links = {
    view: function () {
        return m("span", {
            class: "icon is-large"
        }, [m("a[href=https://github.com/alaberinto]", {
                class: "has-padding-10"
            },
            m("i", {
                class: "fab fa-github-square has-text-danger is-size-1-desktop is-size-1-tablet is-size-3-mobile"
            })
        ), m("a[href=https://www.linkedin.com/in/alaberinto/]", {
                class: "has-padding-10"
            },
            m("i", {
                class: "fab fa-linkedin has-text-danger is-size-1-desktop is-size-1-tablet is-size-3-mobile"
            })
        ), m("a[href=https://codepen.io/alaberinto/]", {
                class: "has-padding-10"
            },
            m("i", {
                class: "fab fa-codepen has-text-danger is-size-1-desktop is-size-1-tablet is-size-3-mobile"
            })
        )])
    }
}
/************** ROUTING **************/

m.route.prefix("")
m.route(root, "/", {
    "/": Projects,
    "/contact": Contact,
    "/about": About,
    "/projects": Projects,
})
