import type { ReactNode } from "react";
import { AWSIcon, AngularIcon, CloudflareIcon, CypressIcon, DockerIcon, ExpressIcon, FastifyIcon, FigmaIcon, FirebaseIcon, GitIcon, GithubIcon, GitlabIcon, JestIcon, JiraIcon, MaterialUIIcon, MongoDBIcon, MySqlIcon, NestJSIcon, NextJsIcon, NodeJsIcon, PlaywrightIcon, PostgreSQLIcon, PrismaOrmIcon, RabbitMQIcon, ReactIcon, ReactNativeIcon, RedisIcon, ReduxIcon, StyledComponentsIcon, SupabaseIcon, TailwindCssIcon, TypeORMIcon, TypeScriptIcon } from "./icons/icons-skills";

export type SkillCategory = 'Frontend' | 'Backend' | 'Other';

export interface Skill {
  name: string;
  icon?: ReactNode; 
}

export const SKILLS_DATA: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'React Native', icon: <ReactNativeIcon /> },
    { name: 'Next.js', icon: <NextJsIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
    { name: 'MaterialUI', icon: <MaterialUIIcon /> },
    { name: 'Styled Components', icon: <StyledComponentsIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },
    { name: 'Playwright', icon: <PlaywrightIcon />},
    { name: "Cypress", icon: <CypressIcon />}
  ],
  Backend: [
    { name: 'Node.js', icon: <NodeJsIcon />},
    { name: 'Express', icon: <ExpressIcon /> },
    { name: 'Fastify', icon: <FastifyIcon /> },
    { name: 'NestJS', icon: <NestJSIcon /> },
    { name: 'Jest', icon: <JestIcon /> },
    { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
    { name: 'MongoDB', icon: <MongoDBIcon /> },
    { name: 'MySQL', icon: <MySqlIcon /> },
    { name: 'TypeORM', icon: <TypeORMIcon /> },
    { name: 'PrismaORM', icon: <PrismaOrmIcon /> },
    { name: 'Redis', icon: <RedisIcon /> },
  ],
  Other: [
    { name: 'Git', icon: <GitIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
    { name: 'Cloudflare', icon: <CloudflareIcon /> },
    { name: 'Figma', icon: <FigmaIcon /> },
    { name: 'Supabase', icon: <SupabaseIcon /> },
    { name: 'Firebase', icon: <FirebaseIcon /> },
    { name: 'Gitlab CI/CD', icon: <GitlabIcon />},
    { name: 'Github Actions', icon: <GithubIcon />},
    { name: 'RabbitMQ', icon: <RabbitMQIcon />},
    { name: 'Jira', icon: <JiraIcon />}
  ],
};
