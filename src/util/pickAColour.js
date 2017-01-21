    export const pickAColour = () => {
      const min = Math.ceil(1)
      const max = Math.floor(10)
      const pickANumber = Math.floor((Math.random() * (max - min)) + min)
      switch (pickANumber) {
        case 1:
          return 'teal'
        case 2:
          return 'purple'
        case 3:
          return 'orange'
        case 4:
          return 'green'
        case 5:
          return 'violet'
        case 6:
          return 'olive'
        case 7:
          return 'pink'
        case 8:
          return 'grey'
        case 9:
          return 'blue'
        case 10:
          return 'red'
        default:
          return 'green'
      }
    }
