import { NoSSR } from '@modern-js/doc-tools/runtime';
interface Member {
  id: string;
}
export const RandomMemberList = () => {
  const list = [
    {
      id: 'zoolsher',
    },
    {
      id: 'hardfist',
    },
    {
      id: 'ahabhgk',
    },
    {
      id: 'bvanjoi',
    },
    {
      id: 'Boshen',
    },
    {
      id: 'h-a-n-a',
    },
    {
      id: 'hyf0',
    },
    {
      id: 'IWANABETHATGUY',
    },
    {
      id: 'jerrykingxyz',
    },
    {
      id: 'underfin',
    },
    {
      id: 'chenjiahan',
    },
    {
      id: 'JSerFeng',
    },
    {
      id: '9aoy',
    },
    {
      id: 'sanyuan0704',
    },
  ];
  const randomList = list.sort(() => Math.random() - 0.5);
  return (
    <NoSSR>
      <ul>
        {randomList.map((x) => (
          <li key={x.id}>
            <a
              href={`https://github.com/${x.id}`}
              target="_blank"
              rel="nofollow"
            >
              {x.id}
            </a>
          </li>
        ))}
      </ul>
    </NoSSR>
  );
};
