import { fireEvent, screen } from '@testing-library/react'
import { Modal } from '.'
import { render } from '../../../testing/render'

const renderModal = () => {
  render(
    <div id="modal">
      <Modal.Provider>
        <Modal.Trigger>
          <button>Open modal</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header heading="The header" />
          <div>The content</div>
        </Modal.Content>
      </Modal.Provider>
    </div>
  )
}

describe('Modal', () => {
  it('should open the modal', () => {
    renderModal()
    expect(screen.queryByText('The header')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }))
    expect(screen.getByText('The header')).toBeInTheDocument()
    expect(screen.getByText('The content')).toBeInTheDocument()
  })

  it('should close the modal', () => {
    renderModal()
    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }))
    expect(screen.getByText('The header')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(screen.queryByText('The header')).not.toBeInTheDocument()
  })

  it('should close the modal when clicking outside', () => {
    renderModal()
    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }))
    expect(screen.getByText('The header')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('modal-overlay'))
    expect(screen.queryByText('The header')).not.toBeInTheDocument()
  })

  it('should not close the modal when clicking inside', () => {
    renderModal()
    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }))
    expect(screen.getByText('The header')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('dialog'))
    expect(screen.getByText('The header')).toBeInTheDocument()
  })
})
