import awsBadge from "../assets/certifications/aws-cloud-practitioner.png";
import googleBadge from "../assets/certifications/google-it-support-badge.png";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "December 08, 2025",
    badge: awsBadge,
    description:
      "Validated foundational knowledge of AWS cloud services, security, networking, pricing, and architectural best practices.",

    skills: [
      "AWS",
      "IAM",
      "EC2",
      "S3",
      "VPC",
      "Cloud Security",
    ],

    credential:"https://www.credly.com/badges/fd8b77b4-85a3-486a-b3ad-1a13adfe74df/public_url"
  },
  {
    id: 2,
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    year: "April 23, 2025",
    badge: googleBadge,
    description:
      "Developed practical IT support skills including troubleshooting, networking, operating systems, system administration, and security.",

    skills: [
      "Networking",
      "Linux",
      "Windows",
      "Security",
      "Troubleshooting",
    ],

    credential:
      "https://www.coursera.org/account/accomplishments/specialization/Q5014CCVBXZC"
  },
  {
    id: 3,
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "In Progress",
  },
];

export default certifications;