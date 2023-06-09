export const data = [
  {
    RULE: 'acm-certificate-with-close-expiration-date',
    'NIST-ID': 'SC-12'
  },
  {
    RULE: 'acm-certificate-with-transparency-logging-disabled',
    'NIST-ID': 'SC-12'
  },
  {
    RULE: 'cloudformation-stack-with-role',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'cloudtrail-duplicated-global-services-logging',
    'NIST-ID': 'AU-6'
  },
  {
    RULE: 'cloudtrail-no-cloudwatch-integration',
    'NIST-ID': 'AU-12|SI-4(2)'
  },
  {
    RULE: 'cloudtrail-no-data-logging',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'cloudtrail-no-encryption-with-kms',
    'NIST-ID': 'AU-6'
  },
  {
    RULE: 'cloudtrail-no-global-services-logging',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'cloudtrail-no-log-file-validation',
    'NIST-ID': 'AU-6'
  },
  {
    RULE: 'cloudtrail-no-logging',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'cloudtrail-not-configured',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'cloudwatch-alarm-without-actions',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'config-recorder-not-configured',
    'NIST-ID': 'CM-8|CM-8(2)|CM-8(6)'
  },
  {
    RULE: 'ec2-ami-public',
    'NIST-ID': 'AC-3'
  },
  {
    RULE: 'ec2-default-security-group-in-use',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 'ec2-default-security-group-with-RULEs',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 'ec2-ebs-snapshot-not-encrypted',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 'ec2-ebs-snapshot-public',
    'NIST-ID': 'AC-3'
  },
  {
    RULE: 'ec2-ebs-volume-not-encrypted',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 'ec2-instance-in-security-group',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-instance-type',
    'NIST-ID': 'CM-2'
  },
  {
    RULE: 'ec2-instance-types',
    'NIST-ID': 'CM-2'
  },
  {
    RULE: 'ec2-instance-with-public-ip',
    'NIST-ID': 'AC-3'
  },
  {
    RULE: 'ec2-instance-with-user-data-secrets',
    'NIST-ID': 'AC-3'
  },
  {
    RULE: 'ec2-security-group-opens-all-ports',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-all-ports-to-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-all-ports-to-self',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-icmp-to-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-known-port-to-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-plaintext-port',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-port-range',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-opens-port-to-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-whitelists-aws',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-whitelists-aws-ip-from-banned-region',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-whitelists-non-elastic-ips',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-whitelists-unknown-aws',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-security-group-whitelists-unknown-cidrs',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'ec2-unused-security-group',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'elb-listener-allowing-cleartext',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'elb-no-access-logs',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'elb-older-ssl-policy',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'elbv2-http-request-smuggling',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'elbv2-listener-allowing-cleartext',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'elbv2-no-access-logs',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'elbv2-no-deletion-protection',
    'NIST-ID': 'SI-7'
  },
  {
    RULE: 'elbv2-older-ssl-policy',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'iam-assume-role-lacks-external-id-and-mfa',
    'NIST-ID': 'AC-17'
  },
  {
    RULE: 'iam-assume-role-no-mfa',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-assume-role-policy-allows-all',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-ec2-role-without-instances',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-group-with-inline-policies',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-group-with-no-users',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-human-user-with-policies',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-inline-policy-allows-non-sts-action',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-inline-policy-allows-NotActions',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-inline-policy-for-role',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-managed-policy-allows-full-privileges',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-managed-policy-allows-non-sts-action',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-managed-policy-allows-NotActions',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-managed-policy-for-role',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-managed-policy-no-attachments',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-no-support-role',
    'NIST-ID': 'IR-7'
  },
  {
    RULE: 'iam-password-policy-expiration-threshold',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-minimum-length',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-no-expiration',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-no-lowercase-required',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-no-number-required',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-no-symbol-required',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-no-uppercase-required',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-password-policy-reuse-enabled',
    'NIST-ID': 'IA-5(1)'
  },
  {
    RULE: 'iam-role-with-inline-policies',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'iam-root-account-no-hardware-mfa',
    'NIST-ID': 'IA-2(1)'
  },
  {
    RULE: 'iam-root-account-no-mfa',
    'NIST-ID': 'IA-2(1)'
  },
  {
    RULE: 'iam-root-account-used-recently',
    'NIST-ID': 'AC-6(9)'
  },
  {
    RULE: 'iam-root-account-with-active-certs',
    'NIST-ID': 'AC-6(9)'
  },
  {
    RULE: 'iam-root-account-with-active-keys',
    'NIST-ID': 'AC-6(9)'
  },
  {
    RULE: 'iam-service-user-with-password',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-unused-credentials-not-disabled',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-user-no-key-rotation',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-user-not-in-category-group',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-user-not-in-common-group',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-user-unused-access-key-initial-setup',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'iam-user-with-multiple-access-keys',
    'NIST-ID': 'IA-2'
  },
  {
    RULE: 'iam-user-without-mfa',
    'NIST-ID': 'IA-2(1)'
  },
  {
    RULE: 'iam-user-with-password-and-key',
    'NIST-ID': 'IA-2'
  },
  {
    RULE: 'iam-user-with-policies',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'kms-cmk-rotation-disabled',
    'NIST-ID': 'SC-12'
  },
  {
    RULE: 'logs-no-alarm-aws-configuration-changes',
    'NIST-ID': 'CM-8|CM-8(2)|CM-8(6)'
  },
  {
    RULE: 'logs-no-alarm-cloudtrail-configuration-changes',
    'NIST-ID': 'AU-6'
  },
  {
    RULE: 'logs-no-alarm-cmk-deletion',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'logs-no-alarm-console-authentication-failures',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'logs-no-alarm-iam-policy-changes',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'logs-no-alarm-nacl-changes',
    'NIST-ID': 'CM-6(2)'
  },
  {
    RULE: 'logs-no-alarm-network-gateways-changes',
    'NIST-ID': 'AU-12|CM-6(2)'
  },
  {
    RULE: 'logs-no-alarm-root-usage',
    'NIST-ID': 'AU-2'
  },
  {
    RULE: 'logs-no-alarm-route-table-changes',
    'NIST-ID': 'AU-12|CM-6(2)'
  },
  {
    RULE: 'logs-no-alarm-s3-policy-changes',
    'NIST-ID': 'AC-6|AU-12'
  },
  {
    RULE: 'logs-no-alarm-security-group-changes',
    'NIST-ID': 'AC-2(4)'
  },
  {
    RULE: 'logs-no-alarm-signin-without-mfa',
    'NIST-ID': 'AC-2'
  },
  {
    RULE: 'logs-no-alarm-unauthorized-api-calls',
    'NIST-ID': 'AU-6|SI-4(2)'
  },
  {
    RULE: 'logs-no-alarm-vpc-changes',
    'NIST-ID': 'CM-6(1)'
  },
  {
    RULE: 'rds-instance-backup-disabled',
    'NIST-ID': 'CP-9'
  },
  {
    RULE: 'rds-instance-ca-certificate-deprecated',
    'NIST-ID': 'SC-12'
  },
  {
    RULE: 'rds-instance-no-minor-upgrade',
    'NIST-ID': 'SI-2'
  },
  {
    RULE: 'rds-instance-short-backup-retention-period',
    'NIST-ID': 'CP-9'
  },
  {
    RULE: 'rds-instance-single-az',
    'NIST-ID': 'CP-7'
  },
  {
    RULE: 'rds-instance-storage-not-encrypted',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 'rds-postgres-instance-with-invalid-certificate',
    'NIST-ID': 'SC-12'
  },
  {
    RULE: 'rds-security-group-allows-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'rds-snapshot-public',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 'redshift-cluster-database-not-encrypted',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 'redshift-cluster-no-version-upgrade',
    'NIST-ID': 'SI-2'
  },
  {
    RULE: 'redshift-cluster-publicly-accessible',
    'NIST-ID': 'AC-3'
  },
  {
    RULE: 'redshift-parameter-group-logging-disabled',
    'NIST-ID': 'AU-12'
  },
  {
    RULE: 'redshift-parameter-group-ssl-not-required',
    'NIST-ID': 'SC-8'
  },
  {
    RULE: 'redshift-security-group-whitelists-all',
    'NIST-ID': 'CM-7(1)'
  },
  {
    RULE: 'route53-domain-no-autorenew',
    'NIST-ID': 'SC-2'
  },
  {
    RULE: 'route53-domain-no-transferlock',
    'NIST-ID': 'SC-2'
  },
  {
    RULE: 'route53-domain-transferlock-not-authorized',
    'NIST-ID': 'SC-2'
  },
  {
    RULE: 's3-bucket-allowing-cleartext',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 's3-bucket-no-default-encryption',
    'NIST-ID': 'SC-28'
  },
  {
    RULE: 's3-bucket-no-logging',
    'NIST-ID': 'AU-2|AU-12'
  },
  {
    RULE: 's3-bucket-no-mfa-delete',
    'NIST-ID': 'SI-7'
  },
  {
    RULE: 's3-bucket-no-versioning',
    'NIST-ID': 'SI-7'
  },
  {
    RULE: 's3-bucket-world-acl',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 's3-bucket-world-policy-arg',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 's3-bucket-world-policy-star',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 'ses-identity-dkim-not-enabled',
    'NIST-ID': 'SC-23'
  },
  {
    RULE: 'ses-identity-dkim-not-verified',
    'NIST-ID': 'SC-23'
  },
  {
    RULE: 'ses-identity-world-policy',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'sns-topic-world-policy',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'sqs-queue-world-policy',
    'NIST-ID': 'AC-6'
  },
  {
    RULE: 'vpc-custom-network-acls-allow-all',
    'NIST-ID': 'SC-7'
  },
  {
    RULE: 'vpc-default-network-acls-allow-all',
    'NIST-ID': 'SC-7'
  },
  {
    RULE: 'vpc-network-acl-not-used',
    'NIST-ID': 'SC-7'
  },
  {
    RULE: 'vpc-routing-tables-with-peering',
    'NIST-ID': 'AC-3(3)'
  },
  {
    RULE: 'vpc-subnet-with-bad-acls',
    'NIST-ID': 'SC-7'
  },
  {
    RULE: 'vpc-subnet-with-default-acls',
    'NIST-ID': 'SC-7'
  },
  {
    RULE: 'vpc-subnet-without-flow-log',
    'NIST-ID': 'AU-12'
  }
];
