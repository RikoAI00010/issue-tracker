
import React from 'react'
import { ModeToggle } from './[components]/themeToggle';
import { useTranslations } from 'next-intl';
import LangControl from '@/app/[locale]/[components]/langController'

const UserPanelTop = () => {
  const t = useTranslations('Index');
  return (
    <div>
      USER PANEL
      {t('title')}
      <LangControl/>
      <ModeToggle/>
    </div>
  )
}

export default UserPanelTop
