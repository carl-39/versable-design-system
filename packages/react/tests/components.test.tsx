import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Button, Dialog, Field, Tabs, TextInput } from '../src';

it('exposes an accessible, named button', async () => { const { container } = render(<Button>Save record</Button>); expect(screen.getByRole('button', { name: 'Save record' })).toBeEnabled(); expect((await axe(container)).violations).toHaveLength(0); });
it('connects a field label and validation message', () => { render(<Field label="Student number" error="Enter a student number.">{(props) => <TextInput {...props} />}</Field>); expect(screen.getByLabelText('Student number')).toHaveAttribute('aria-invalid', 'true'); expect(screen.getByText('Enter a student number.')).toBeInTheDocument(); });
it('changes tab panels through keyboard-reachable buttons', async () => { const user = userEvent.setup(); render(<Tabs label="Record sections" tabs={[{ id: 'overview', label: 'Overview', panel: 'Overview content' }, { id: 'grades', label: 'Grades', panel: 'Grades content' }]} />); await user.click(screen.getByRole('tab', { name: 'Grades' })); expect(screen.getByRole('tabpanel')).toHaveTextContent('Grades content'); });
it('closes a dialog through its cancel route', () => { let open = true; const close = () => { open = false; }; const { rerender } = render(<Dialog open={open} title="Export record" onClose={close}>Ready</Dialog>); fireEvent(screen.getByRole('dialog'), new Event('cancel', { cancelable: true })); rerender(<Dialog open={open} title="Export record" onClose={close}>Ready</Dialog>); expect(screen.queryByRole('dialog')).not.toBeInTheDocument(); });
