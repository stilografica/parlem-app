export function productsChips(type) {
  const color = {
    enerr: {
        color: 'deep-orange-lighten-2',
        icon: 'mdi mdi-solar-power-variant'
    },
    ftth: {
      color: 'yellow-darken-1',
      icon: 'mdi-access-point-network'
    },
    hehh: {
      color: 'amber-darken-4',
      icon: 'mdi-cellphone-wireless'
    },
  }
  return color[type]
}
