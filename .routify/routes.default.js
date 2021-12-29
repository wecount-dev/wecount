

export default {
  "meta": {},
  "id": "_default",
  "module": () => import('../src/routes/_module.svelte'),
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
      "module": () => import('../src/routes/_fallback.svelte'),
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
          "module": () => import('../src/routes/auth/sign-in.svelte'),
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
          "module": () => import('../src/routes/auth/sign-up.svelte'),
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
          "meta": {},
          "id": "_default_community__id_",
          "name": "[id]",
          "module": () => import('../src/routes/community/[id]/_module.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/dashboard/history.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/dashboard/index.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/dashboard/member-list.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/dashboard/statistics.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/dashboard/summary.svelte'),
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
              "module": () => import('../src/routes/community/[id]/feeds.svelte'),
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
              "module": () => import('../src/routes/community/[id]/index.svelte'),
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
              "module": () => import('../src/routes/community/[id]/members.svelte'),
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
              "id": "_default_community__id__settings",
              "name": "settings",
              "module": () => import('../src/routes/community/[id]/settings/_module.svelte'),
              "file": {
                "path": "src/routes/community/[id]/settings/_module.svelte",
                "dir": "src/routes/community/[id]/settings",
                "base": "_module.svelte",
                "ext": ".svelte",
                "name": "_module"
              },
              "children": [
                {
                  "meta": {},
                  "id": "_default_community__id__settings_index_svelte",
                  "name": "index",
                  "module": () => import('../src/routes/community/[id]/settings/index.svelte'),
                  "file": {
                    "path": "src/routes/community/[id]/settings/index.svelte",
                    "dir": "src/routes/community/[id]/settings",
                    "base": "index.svelte",
                    "ext": ".svelte",
                    "name": "index"
                  },
                  "children": []
                },
                {
                  "meta": {},
                  "id": "_default_community__id__settings_members_svelte",
                  "name": "members",
                  "module": () => import('../src/routes/community/[id]/settings/members.svelte'),
                  "file": {
                    "path": "src/routes/community/[id]/settings/members.svelte",
                    "dir": "src/routes/community/[id]/settings",
                    "base": "members.svelte",
                    "ext": ".svelte",
                    "name": "members"
                  },
                  "children": []
                }
              ]
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
                  "module": () => import('../src/routes/community/[id]/sidebar/index.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/sidebar/menu-add.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/sidebar/menu-list.svelte'),
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
                  "module": () => import('../src/routes/community/[id]/sidebar/menu.svelte'),
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
        },
        {
          "meta": {},
          "id": "_default_community_create_svelte",
          "name": "create",
          "module": () => import('../src/routes/community/create.svelte'),
          "file": {
            "path": "src/routes/community/create.svelte",
            "dir": "src/routes/community",
            "base": "create.svelte",
            "ext": ".svelte",
            "name": "create"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_community_index_svelte",
          "name": "index",
          "module": () => import('../src/routes/community/index.svelte'),
          "file": {
            "path": "src/routes/community/index.svelte",
            "dir": "src/routes/community",
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
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/routes/index.svelte'),
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
      "id": "_default_profile_svelte",
      "name": "profile",
      "module": () => import('../src/routes/profile.svelte'),
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
      "module": () => import('../src/routes/temp.svelte'),
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