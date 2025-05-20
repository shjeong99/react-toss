import { type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router';

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <NavLink
            to={item.url}
            className={({ isActive }) => (isActive ? 'sidebar-active' : '')}
          >
            <SidebarMenuButton>
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </NavLink>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
