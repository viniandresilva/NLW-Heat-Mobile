import React from 'react';

import {
  Image
} from 'react-native';

import avatarImg from '../../assets/avatar.png'

import { styles } from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarsize: 28
  },
  NORMAL: {
    containerSize: 48,
    avatarsize: 42
  }
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri

type Props = {
  imageUri: string | undefined;
  size?: 'SMALL' | 'NORMAL';
}

export function UserPhoto({ imageUri, size = 'NORMAL' }: Props) {
  const { containerSize, avatarsize } = SIZES[size];
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2
        }
      ]}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          {
            width: avatarsize,
            height: avatarsize,
            borderRadius: avatarsize / 2
          }
        ]}
      />
    </LinearGradient>
  );
}