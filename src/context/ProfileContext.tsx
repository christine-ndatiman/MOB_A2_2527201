import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialProfile } from '../data';
import { Profile } from '../types';

const STORAGE_KEY = '@ncportfolio/profile-v1';

type ProfileContextValue = {
  profile: Profile;
  ready: boolean;
  saveProfile: (next: Profile) => Promise<void>;
  resetProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved && active) setProfile({ ...initialProfile, ...JSON.parse(saved) });
      } catch {
        // The app stays usable with its initial profile if saved data cannot be read.
      } finally {
        if (active) setReady(true);
      }
    })();
    return () => { active = false; };
  }, []);

  const saveProfile = async (next: Profile) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setProfile(next);
  };

  const resetProfile = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setProfile(initialProfile);
  };

  return <ProfileContext.Provider value={{ profile, ready, saveProfile, resetProfile }}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const value = useContext(ProfileContext);
  if (!value) throw new Error('useProfile must be used within ProfileProvider');
  return value;
}
