import { useMemo } from 'react';
import { osechiStore } from '@src/store/osechiStore';
import { Osechi } from '@src/types';

export const useRecommendOsechiList = (category: 'ja' | 'we' | 'ch') => {
  return useMemo(() => {
    const osechiList: Osechi[] = [];
    switch (category) {
      case 'ja': {
        osechiList.push(osechiStore.findByCode('1_takasago'));
        osechiList.push(osechiStore.findByCode('1_kohaku'));
        osechiList.push(osechiStore.findByCode('2_kacyo_F-020'));
        break;
      }
      case 'we': {
        osechiList.push(osechiStore.findByCode('3_disney'));
        osechiList.push(
          osechiStore.findByCode('2_chesapeake_2017osechi-2danzyu')
        );
        osechiList.push(osechiStore.findByCode('2_ailes_osechi2018-03'));
        break;
      }
      case 'ch': {
        osechiList.push(osechiStore.findByCode('1_takasagocn'));
        osechiList.push(osechiStore.findByCode('2_kiyouken_g202018000'));
        osechiList.push(osechiStore.findByCode('2_kandatouen_2017-2dan'));
      }
    }
    return osechiList;
  }, [category]);
};
