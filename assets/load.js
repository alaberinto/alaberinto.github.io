var root = document.body

/************** HOME **************/

var Hamburg = {
    view: function () {
        return m("a", {
            class: "navbar-item image has-text-black center is-hoverable"
        }, m("i", {
            class: "fas fa-bars"
        }))
    }
}

var Menu = {
    view: function () {
        return m("div", {
                class: "dropdown-menu",
                role: "menu"
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
            }, "CONTACT"))
    }
}

var Trigger = {
    view: function () {
        return m("div", {
            class: "dropdown-trigger"
        }, m(Hamburg))
    }
}

var Dropdown = {
    view: function () {
        return m("div", {
            class: "dropdown is-hoverable is-right"
        }, [m(Trigger), m(Menu)])
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

var ColumnRight = {
    view: function () {
        return m("div", {
            class: "column right heading has-text-weight-bold"
        }, [m(ContactLink), m(Dropdown)])
    }
}

var Name = {
    view: function () {
        return m("a[href=/]", {
            class: "has-text-black name"
        }, "Alvin Laberinto")
    }
}

var ColumnLeft = {
    view: function () {
        return m("div", {
            class: "column left has-text-black"
        }, m(Name))
    }
}

var Columns = {
    view: function () {
        return m("div", {
            class: "columns is-mobile is-marginless"
        }, [m(ColumnLeft), m(ColumnRight)])
    }
}

var Head = {
    view: function () {
        return m("div", {
            class: "hero-head"
        }, m(Columns))
    }
}

var Poem = {
    view: function() {
        return m("div", {
            class: "hero-body"
        }, m("div", {
            class: "hidden is-overlay from-top"
        }, "on a cold and windy day,    my love for you           kept me warm and steady.   in a cold and windy world, your love for me          keeps me calm             and brings me peace."))
    }
}

var Home = {
    view: function () {
        return m("section", {
            class: "hero head1 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(Poem)])
    }
}

/************** ABOUT **************/

var AboutInfo = {
    view: function () {
        return m("div", {
            class: "is-overlay has-text-centered from-top"
        }, m("div", {
                class: "has-text-black is-lowercase is-size-3-touch is-size-2-desktop"
            }, "about me", m("div", {
            class: "name-down has-padding-top-15"
        }, "hi, i'm alvin laberinto. i'm a full stack developer from calgary, ab, canada. i graduated from the software development program at SAIT in April 2019.")))
    }
}

var AboutBody = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m(AboutInfo))
    }
}

var About = {
    view: function () {
        return m("section", {
            class: "hero head2 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(AboutBody)])
    }
}

/************** CONTACT **************/

var Links = {
    view: function () {
        return m("span", {
            class: "icon"
        }, [m("a[href=https://github.com/alaberinto]", m("i", {class: "fab fa-github-square has-text-danger has-padding-top-45 fa-2x"})),
           m("a[href=https://www.linkedin.com/in/alaberinto/]", m("i", {class: "fab fa-linkedin has-text-danger has-padding-top-45 fa-2x"})),
           m("a[href=https://codepen.io/alaberinto/]", m("i", {class: "fab fa-codepen has-text-danger has-padding-top-45 fa-2x"}))])
    }
}

var LinkHeader = {
    view: function () {
        return m("div", {
            class: "has-text-black name"
        }, m(Links))
    }
}

var ContactTitle = {
    view: function () {
        return m("div", {
                class: "has-text-black name"
            }, "Shoot me an email: ",
            m("a[href=mailto:mralvinlaberinto@gmail.com]", {
                class: "has-text-danger name"
            }, "mralvinlaberinto@gmail.com"))
    }
}

var ContactInfo = {
    view: function () {
        return m("div", {
            class: "is-overlay has-text-centered from-top"
        }, m(ContactTitle), m(LinkHeader))
    }
}

var ContactBody = {
    view: function () {
        return m("div", {
            class: "hero-body"
        }, m(ContactInfo))
    }
}

var Contact = {
    view: function () {
        return m("section", {
            class: "hero head3 is-fullheight animated fadeInUp delay-1s"
        }, [m(Head), m(ContactBody)])
    }
}

/************** ROUTING **************/

m.route.prefix("")
m.route(root, "/", {
    "/": Home,
    "/contact": Contact,
    "/about": About,
    //    "/projects": Projects,
})
