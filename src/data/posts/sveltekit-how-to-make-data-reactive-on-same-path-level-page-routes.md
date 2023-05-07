---
number: 14
title: SvelteKit - How to make data reactive on same path level page routes
published: 2023-05-07T13:44:46Z
updated: 2023-05-07T13:48:17Z
url: https://github.com/harryhdt/web/discussions/14
labels: []
excerpt: "![SvelteKit](https://kit.svelte.dev/_app/immutable/assets/svelte-logo\
  .5c5d7d20.svg) When I used SvelteKit default rou"
---
![SvelteKit](https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg)

When I used SvelteKit default routing, I found cases where the data didn't change when opening a route of the same level, for example _<ins>"/pages/one"</ins>_ to be _<ins>"/pages /two"</ins>_, which This should do changing when navigated to pages **"two"**, Expected get **"two"** data, but actually the data doesn't change, i.e. it's always **"one"** data.

The solution was simple, turns out I just changed the variable declaration for the initial data

`let data = reactive_value`

become

`$: data = reactive_value`

So by default the variable **"data"** will respond to changes that occur from its value.

This solution worked for me, but I don't think it's necessarily the answer for your case. 