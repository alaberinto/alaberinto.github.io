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
        return m("div", {
            class: "name"
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
            },
                 [m(ColumnLeft), m(ColumnRight)]
        )
    }
}

var Head = {
    view: function () {
        return m("div", {
            class: "hero-head"
        }, m(Columns))
    }
}

var Home = {
    view: function () {
        return m("section", {
            class: "hero head1 is-fullheight animated fadeInUp delay-1s"
        }, m(Head))
    }
}

/************** ABOUT **************/

var About = {
    view: function () {
        return m("section", {
            class: "hero head2 is-fullheight animated fadeInUp delay-1s"
        }, m(Head))
    }
}

/************** CONTACT **************/

var Contact = {
    view: function () {
        return m("section", {
            class: "hero head3 is-fullheight animated fadeInUp delay-1s"
        }, m(Head))
    }
}

/************** ROUTING **************/

m.route.prefix("")
m.route(root, "/", {
    "/": Home,
    "/contact": Contact,
    "/about": About,
//    "/projects", Projects
})
