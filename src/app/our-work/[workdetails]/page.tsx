// src/app/our-work/[workdetails]/page.tsx
import ProjectDetails from '@/components/pages/ProjectDetails';
import { projectDetails } from '@/components/utils/page-data/projectDetail';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ workdetails: string }>;
}) {
  const { workdetails } = await params;
  const project = projectDetails.find((p) => p.slug === workdetails);

  if (!project) notFound();

  return <ProjectDetails data={project} />;
}
