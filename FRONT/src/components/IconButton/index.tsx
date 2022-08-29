import { Icons } from '../../types'
import { icons } from '../../utils/icons'
import { Button } from './style'

type IconButtonProps = {
  icon: Icons
  onClick?: () => void
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => (
  <Button onClick={onClick} data-testid="button">
    {icons[icon]}
  </Button>
)
