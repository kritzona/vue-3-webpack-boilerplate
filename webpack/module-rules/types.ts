import { RuleSetRule } from 'webpack';

export interface WebpackModuleRule {
  development: RuleSetRule;

  production: RuleSetRule;
}
