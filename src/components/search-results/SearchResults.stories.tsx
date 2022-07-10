import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchResults from './SearchResults'

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>

const Template: ComponentStory<typeof SearchResults> = (args: any) => <SearchResults {...args} />

export const Primary = Template.bind({})
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
}

Primary.args = {
  label: 'SearchResults',
  variant: SearchResultsVariants.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'SearchResults',
  variant: SearchResultsVariants.secondary
} */
