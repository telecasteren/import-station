export const scriptInfo = [
  {
    id: 1,
    name: "tenantGenerator",
    desc: "Generates a new tenant based on the template it's copied from",
    criteria: [
      "Tenant name",
      "Client org.nr",
      "Municipality numbers/Postal numbers",
    ],
    requiresAuth: false,
  },
  {
    id: 2,
    name: "copyLetters",
    desc: "Copies all letter templates per casetype from the tenant you set as source, and DELETES existing at the target",
    criteria: ["Source tenant name", "Target tenant name", "Casetype"],
    requiresAuth: true,
  },
  {
    id: 3,
    name: "UpdateChimneyFrequencies",
    desc: "Does something healthy with sweep frequencies on chimney",
    criteria: ["Target tenant name", "Frequency-mapping"],
    requiresAuth: true,
  },
  {
    id: 4,
    name: "CopyRiskAssessment",
    desc: "Copies all risk assessment modules from source tenant to target tenant",
    criteria: ["Source tenant name", "Target tenant name"],
    requiresAuth: true,
  },
];
