

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
      "meta": {},
      "id": "_default___tests__",
      "name": "__tests__",
      "module": false,
      "file": {
        "path": "src/routes/__tests__",
        "dir": "src/routes",
        "base": "__tests__",
        "ext": "",
        "name": "__tests__"
      },
      "children": []
    },
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