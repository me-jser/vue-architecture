export default [{
  path: '/demo/xhr',
  name: 'xhr',
  component: () =>
      import('@/components/demo/HelloXhr')
},
{
  path: '/demo/store',
  name: 'vuex',
  component: () =>
      import('@/components/demo/HelloVuex')
}
]
