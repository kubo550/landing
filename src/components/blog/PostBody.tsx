import type { Block, InlineNode } from '@/content/blog/types';

function Inline({ nodes }: { nodes: InlineNode[] }) {
  return (
    <>
      {nodes.map((node, idx) => {
        if (node.kind === 'strong') {
          return (
            <strong key={idx} className="font-semibold text-[color:var(--color-fg)]">
              {node.value}
            </strong>
          );
        }
        if (node.kind === 'em') {
          return (
            <em key={idx} className="italic">
              {node.value}
            </em>
          );
        }
        if (node.kind === 'code') {
          return (
            <code
              key={idx}
              className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-1.5 py-0.5 font-mono text-[0.85em] text-[color:var(--color-fg)]"
            >
              {node.value}
            </code>
          );
        }
        return <span key={idx}>{node.value}</span>;
      })}
    </>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6 text-[1.0625rem] leading-relaxed text-[color:var(--color-fg-muted)]">
      {blocks.map((block, idx) => {
        if (block.kind === 'h2') {
          return (
            <h2
              key={idx}
              className="mt-6 text-balance text-2xl font-medium tracking-tight text-[color:var(--color-fg)] sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.kind === 'p') {
          return (
            <p key={idx} className="text-pretty">
              <Inline nodes={block.nodes} />
            </p>
          );
        }
        if (block.kind === 'ul') {
          return (
            <ul key={idx} className="ml-1 flex list-none flex-col gap-2">
              {block.items.map((item, j) => (
                <li key={j} className="relative pl-6 text-pretty">
                  <span
                    className="absolute left-1 top-[0.7em] h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <Inline nodes={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <ol key={idx} className="ml-1 flex list-none flex-col gap-2">
            {block.items.map((item, j) => (
              <li key={j} className="relative pl-9 text-pretty">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.1em] flex h-6 w-6 items-center justify-center rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] font-mono text-[0.7rem] text-[color:var(--color-fg)]"
                >
                  {j + 1}
                </span>
                <Inline nodes={item} />
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}
