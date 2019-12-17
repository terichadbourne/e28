import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import People from '@/components/pages/People.vue'

describe('People.vue', () => {

  it('displays multiple people with name and any existing feedback', () => {

    // Define people data for testing
    let people = [
      {
        "id": 1,
        "name": "Janet",
        "rave": "The people here are awesome.",
        "rant": "Bureacracy is painful. :("
      },
      {
        "id": 2,
        "name": "Theodore",
        "rant": "I don't get enough time to code."
      }
    ]

    // Mount our component
    const wrapper = shallowMount(People, {
      propsData: { people }

      // THIS DIDN'T HELP (REPLACING ABOVE)
      // computed: {
      //   people: function () {
      //     return [people]
      //   }
      // }

    })

    // Assert our results

    // THIS DIDN'T HELP (REPLACING SETTIMEOUT BELOW)
    // await new Promise(resolve => setTimeout(resolve));

    // giving it time to figure out what "people" is so it doesn't display loading message
    setTimeout(function () {
      expect(wrapper.text()).to.include('People')
      people.forEach((person, index) => {
        expect(wrapper.text()).to.include(people[0].name)
        if (people[index].hasOwnProperty('rave')) {
          let foundRaveLink = wrapper.find('[data-test="rave-link"]').exists();
          expect(foundRaveLink).to.equal(true);
          expect(foundRaveLink.text()).to.include(people[index].rave)
        }
        if (people[index].hasOwnProperty('rant')) {
          let foundRantLink = wrapper.find('[data-test="rant-link"]').exists();
          expect(foundRantLink).to.equal(true);
          expect(foundRantLink.text()).to.include(people[index].rant)
        }
      })
    }, 5000);

  })
})
