import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
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

    // Mount component
    const wrapper = shallowMount(People, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    // Overwrite data option people in component with people object above (avoiding Axios)
    wrapper.setData({ people: people })

    // giving it time to figure out what "people" is so it doesn't display loading message
    expect(wrapper.text()).to.include('People')
    expect(wrapper.text()).to.include(people[0].name)
    people.forEach((person, index) => {
      if (people[index].hasOwnProperty('rave')) {
        // get first ravec link with the right ID 
        let raveLink = wrapper.find('[data-test="rave-link-' + people[index].id + '"]');
        // confirm link exists
        expect(raveLink.exists()).to.equal(true);
        // confirm link contains the right text
        expect(raveLink.text()).to.include(people[index].rave)
      }
      if (people[index].hasOwnProperty('rant')) {
        // get first rant link with the right ID 
        let rantLink = wrapper.find('[data-test="rant-link-' + people[index].id + '"]');
        // confirm link exists
        expect(rantLink.exists()).to.equal(true);
        // confirm link contains the right text
        expect(rantLink.text()).to.include(people[index].rant)
      }
    })

  })
})
