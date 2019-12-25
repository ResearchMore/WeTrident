/* eslint-disable no-undef */
/**
 * Created by poppyshen on 2018-05-22T08:50:22.685Z.
 */
import React from 'react'
import TestRenderer from 'react-test-renderer'

import Button from '../../trident-ui/components/button/Button'

test('Button render', () => {
  TestRenderer.create(
    <Button />
  )
})
