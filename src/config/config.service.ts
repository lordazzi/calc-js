import { CalcConfig } from './calc-config';

export class ConfigService {

  private static instance: ConfigService | null = null;

  static defaultConfig: CalcConfig = {
    thrownStrategy: 'emit-event',
    throwNaN: true,
    throwInfinite: true,
    throwUnsafeNumber: true
  };

  static getInstance(): ConfigService {
    if (!this.instance) {
      this.instance = new ConfigService();
    }

    return this.instance;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  static configure(config: CalcConfig): void {
    ConfigService.defaultConfig = this.mergeConfigs(this.defaultConfig, config);
  }

  private static mergeConfigs(config: CalcConfig, mergeWith?: CalcConfig): CalcConfig {
    return { ...config, ...mergeWith };
  }

  createConfigs(customConfig?: CalcConfig): CalcConfig {
    return ConfigService.mergeConfigs(ConfigService.defaultConfig, customConfig);
  }
}
