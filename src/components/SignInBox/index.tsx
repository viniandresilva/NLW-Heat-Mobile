import React from 'react';
import { useAuth } from '../../hooks/auth';

import {
  View
} from 'react-native';

import { Button } from '../Button';

import { COLORS } from '../../theme';

import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={isSigningIn}
        onPress={signIn}
      />
    </View>
  );
}