import * as bundle__default from './bundles/_default-bundle.js'

export default {
  "meta": {
    "bundle": true
  },
  "id": "_default",
  "module": () => bundle__default._default,
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "fallback": true
      },
      "id": "_default__fallback_svelte",
      "name": "_fallback",
      "module": () => bundle__default._default__fallback_svelte,
      "file": {
        "path": "src/routes/_fallback.svelte",
        "dir": "src/routes",
        "base": "_fallback.svelte",
        "ext": ".svelte",
        "name": "_fallback"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_auth",
      "name": "auth",
      "module": false,
      "file": {
        "path": "src/routes/auth",
        "dir": "src/routes",
        "base": "auth",
        "ext": "",
        "name": "auth"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_auth_sign_in_svelte",
          "name": "sign-in",
          "module": () => bundle__default._default_auth_sign_in_svelte,
          "file": {
            "path": "src/routes/auth/sign-in.svelte",
            "dir": "src/routes/auth",
            "base": "sign-in.svelte",
            "ext": ".svelte",
            "name": "sign-in"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_auth_sign_up_svelte",
          "name": "sign-up",
          "module": () => bundle__default._default_auth_sign_up_svelte,
          "file": {
            "path": "src/routes/auth/sign-up.svelte",
            "dir": "src/routes/auth",
            "base": "sign-up.svelte",
            "ext": ".svelte",
            "name": "sign-up"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_communities_svelte",
      "name": "communities",
      "module": () => bundle__default._default_communities_svelte,
      "file": {
        "path": "src/routes/communities.svelte",
        "dir": "src/routes",
        "base": "communities.svelte",
        "ext": ".svelte",
        "name": "communities"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_community",
      "name": "community",
      "module": false,
      "file": {
        "path": "src/routes/community",
        "dir": "src/routes",
        "base": "community",
        "ext": "",
        "name": "community"
      },
      "children": [
        {
          "meta": {
            "bundle": true
          },
          "id": "_default_community__id_",
          "name": "[id]",
          "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id_),
          "file": {
            "path": "src/routes/community/[id]/_module.svelte",
            "dir": "src/routes/community/[id]",
            "base": "_module.svelte",
            "ext": ".svelte",
            "name": "_module"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_community__id__dashboard",
              "name": "dashboard",
              "module": false,
              "file": {
                "path": "src/routes/community/[id]/dashboard",
                "dir": "src/routes/community/[id]",
                "base": "dashboard",
                "ext": "",
                "name": "dashboard"
              },
              "children": [
                {
                  "meta": {},
                  "id": "_default_community__id__dashboard_history_svelte",
                  "name": "history",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__dashboard_history_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/dashboard/history.svelte",
                    "dir": "src/routes/community/[id]/dashboard",
                    "base": "history.svelte",
                    "ext": ".svelte",
                    "name": "history"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__dashboard_index_svelte",
                  "name": "index",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__dashboard_index_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/dashboard/index.svelte",
                    "dir": "src/routes/community/[id]/dashboard",
                    "base": "index.svelte",
                    "ext": ".svelte",
                    "name": "index"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__dashboard_member_list_svelte",
                  "name": "member-list",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__dashboard_member_list_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/dashboard/member-list.svelte",
                    "dir": "src/routes/community/[id]/dashboard",
                    "base": "member-list.svelte",
                    "ext": ".svelte",
                    "name": "member-list"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__dashboard_statistics_svelte",
                  "name": "statistics",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__dashboard_statistics_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/dashboard/statistics.svelte",
                    "dir": "src/routes/community/[id]/dashboard",
                    "base": "statistics.svelte",
                    "ext": ".svelte",
                    "name": "statistics"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__dashboard_summary_svelte",
                  "name": "summary",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__dashboard_summary_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/dashboard/summary.svelte",
                    "dir": "src/routes/community/[id]/dashboard",
                    "base": "summary.svelte",
                    "ext": ".svelte",
                    "name": "summary"
                  },
                  "children": []
                }
              ]
            },
            {
              "meta": {},
              "id": "_default_community__id__feeds_svelte",
              "name": "feeds",
              "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__feeds_svelte),
              "file": {
                "path": "src/routes/community/[id]/feeds.svelte",
                "dir": "src/routes/community/[id]",
                "base": "feeds.svelte",
                "ext": ".svelte",
                "name": "feeds"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_community__id__index_svelte",
              "name": "index",
              "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__index_svelte),
              "file": {
                "path": "src/routes/community/[id]/index.svelte",
                "dir": "src/routes/community/[id]",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_community__id__members_svelte",
              "name": "members",
              "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__members_svelte),
              "file": {
                "path": "src/routes/community/[id]/members.svelte",
                "dir": "src/routes/community/[id]",
                "base": "members.svelte",
                "ext": ".svelte",
                "name": "members"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_community__id__settings_svelte",
              "name": "settings",
              "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__settings_svelte),
              "file": {
                "path": "src/routes/community/[id]/settings.svelte",
                "dir": "src/routes/community/[id]",
                "base": "settings.svelte",
                "ext": ".svelte",
                "name": "settings"
              },
              "children": []
            },
            {
              "meta": {},
              "id": "_default_community__id__sidebar",
              "name": "sidebar",
              "module": false,
              "file": {
                "path": "src/routes/community/[id]/sidebar",
                "dir": "src/routes/community/[id]",
                "base": "sidebar",
                "ext": "",
                "name": "sidebar"
              },
              "children": [
                {
                  "meta": {},
                  "id": "_default_community__id__sidebar_index_svelte",
                  "name": "index",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__sidebar_index_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/sidebar/index.svelte",
                    "dir": "src/routes/community/[id]/sidebar",
                    "base": "index.svelte",
                    "ext": ".svelte",
                    "name": "index"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__sidebar_menu_add_svelte",
                  "name": "menu-add",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__sidebar_menu_add_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/sidebar/menu-add.svelte",
                    "dir": "src/routes/community/[id]/sidebar",
                    "base": "menu-add.svelte",
                    "ext": ".svelte",
                    "name": "menu-add"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__sidebar_menu_list_svelte",
                  "name": "menu-list",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__sidebar_menu_list_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/sidebar/menu-list.svelte",
                    "dir": "src/routes/community/[id]/sidebar",
                    "base": "menu-list.svelte",
                    "ext": ".svelte",
                    "name": "menu-list"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__sidebar_menu_svelte",
                  "name": "menu",
                  "module": () => import("./bundles/_default_community__id_-bundle.js").then(r => r._default_community__id__sidebar_menu_svelte),
                  "file": {
                    "path": "src/routes/community/[id]/sidebar/menu.svelte",
                    "dir": "src/routes/community/[id]/sidebar",
                    "base": "menu.svelte",
                    "ext": ".svelte",
                    "name": "menu"
                  },
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_community_create_svelte",
      "name": "community-create",
      "module": () => bundle__default._default_community_create_svelte,
      "file": {
        "path": "src/routes/community-create.svelte",
        "dir": "src/routes",
        "base": "community-create.svelte",
        "ext": ".svelte",
        "name": "community-create"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => bundle__default._default_index_svelte,
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_onboard",
      "name": "onboard",
      "module": false,
      "file": {
        "path": "src/routes/onboard",
        "dir": "src/routes",
        "base": "onboard",
        "ext": "",
        "name": "onboard"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_onboard_card_svelte",
          "name": "card",
          "module": () => bundle__default._default_onboard_card_svelte,
          "file": {
            "path": "src/routes/onboard/card.svelte",
            "dir": "src/routes/onboard",
            "base": "card.svelte",
            "ext": ".svelte",
            "name": "card"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_onboard_index_svelte",
          "name": "index",
          "module": () => bundle__default._default_onboard_index_svelte,
          "file": {
            "path": "src/routes/onboard/index.svelte",
            "dir": "src/routes/onboard",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_profile_svelte",
      "name": "profile",
      "module": () => bundle__default._default_profile_svelte,
      "file": {
        "path": "src/routes/profile.svelte",
        "dir": "src/routes",
        "base": "profile.svelte",
        "ext": ".svelte",
        "name": "profile"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_temp_svelte",
      "name": "temp",
      "module": () => bundle__default._default_temp_svelte,
      "file": {
        "path": "src/routes/temp.svelte",
        "dir": "src/routes",
        "base": "temp.svelte",
        "ext": ".svelte",
        "name": "temp"
      },
      "children": []
    }
  ]
}